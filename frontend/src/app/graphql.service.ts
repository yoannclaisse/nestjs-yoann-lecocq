import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloQueryResult, InMemoryCache, gql } from '@apollo/client/core';
import { environment } from '../environments/environment.development';
import { User, UserQueryResponse } from './models/graphql.model';
import { Observable } from 'rxjs';
import { sha256 } from 'js-sha256';

// VARIABLES POUR GQL QUERIES

// { "user": {"email": {"equals": "test@test.com"}, "password": {"equals": "azerty789"}} }
const getUserByEmailAndPassword = gql`query getUserByEmailAndPassword($user: UserWhereInput!){
  findFirstUserOrThrow(where: $user) {
    id, username, email}
  }`

// { "createOneUser": {"username": "yoyo3", "email":"yoyo@yoyo.com", "password": "azerty789", "todos": []} }
const createOneUser = gql`mutation createOneUser($createOneUser: UserCreateInput!){
  createOneUser(data: $createOneUser){
    id username email}
  }`

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  user: User | null = null

  /**
   * 
   * @param apollo
   * @param httpLink 
   */
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    console.log('toto')
    // c'est ici que ça connecte le front avec le back
    this.apollo.create({
      cache: new InMemoryCache(),
      // ENVIRONMENT
      // Fetches from http://my-prod-url in production, http://my-dev-url in development.
      link: httpLink.create({ uri: environment.apiUrl }),
    })
  }

  // ICI je  m'occupe de faire la query pour le login, elle retourne un observable et on analyse le sub et l'error
  login(mail: string, password: string): Observable<User> {

    const hashedPassword = sha256(password)

    const graphqlRequest =
      this.apollo.watchQuery<UserQueryResponse>({
        query: getUserByEmailAndPassword,
        variables: { "user": { "email": { "equals": mail }, "password": { "equals": hashedPassword } } },
        fetchPolicy: "no-cache"
      }).valueChanges
    return new Observable<User>(
      (subscriber) => {
        graphqlRequest.subscribe(
          (result: ApolloQueryResult<UserQueryResponse>) => {
            const user = result.data.findFirstUserOrThrow
            if (!!user) {
              this.user = user
              // on déclenche l'evt "next"
              subscriber.next(user)
            }
          },
          (error: any) => {
            // On déclenche l'evt error, on transfère l'error graphQL
            subscriber.error(error)
          }
        )
      }
    )
  }

  signin(username: string, email: string, password: string): Observable<User> {

    const hashedPassword = sha256(password)

    return new Observable<User>(
      (subscriber) => {
        // requête apollo pour créer un user
        this.apollo.mutate<UserQueryResponse>({
          mutation: createOneUser,
          variables: { "createOneUser": { "username": username, "email": email, "password": hashedPassword, "todos": [] } }
        })
          // on subscribe a la requête graphQL pour recup' le resultat de la requêt graphQL
          .subscribe(
            (result: MutationResult<UserQueryResponse>) => {
              console.log("Result :", result)
              const user = result?.data?.createOneUser
              console.log("User :", user)
              if (!user) {
                // On déclenche l'evt error
                subscriber.error("unable to create user")
              } else {
                // On déclenche l'evt next
                subscriber.next(user)
              }

            },
            // On entre dans l'evt error de la requête graphQL
            (error: any) => {
              // On transfère le message d'erreur
              subscriber.error(error)
            })
      })
  }
}
