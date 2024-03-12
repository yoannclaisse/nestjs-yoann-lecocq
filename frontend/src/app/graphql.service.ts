import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloQueryResult, InMemoryCache, gql } from '@apollo/client/core';
import { environment } from '../environments/environment.development';
import { Todo, TodoQueryResponse, User, UserQueryResponse } from './models/graphql.model';
import { Observable } from 'rxjs';
import { sha256 } from 'js-sha256';

// VARIABLES POUR GQL QUERIES

// { "user": {"email": {"equals": "test@test.com"}, "password": {"equals": "azerty789"}} }
const getUserByEmailAndPassword = gql`query getUserByEmailAndPassword($user: UserWhereInput!){
  findFirstUserOrThrow(where: $user) {
    id, username, email, todos{description id title completed}}
  }`

// { "createOneUser": {"username": "yoyo3", "email":"yoyo@yoyo.com", "password": "azerty789", "todos": []} }
const createOneUser = gql`mutation createOneUser($createOneUser: UserCreateInput!){
  createOneUser(data: $createOneUser){
    id username email}
  }`

const CREATE_TODO = gql`mutation CreateTodo($input: TodoCreateInput!) {
  createOneTodo(data: $input) {
    id
    title
    description
    userId
  }
}`

const GET_USER = gql`query getUserByNameWithTodos($input: UserWhereUniqueInput!){user(where: $input){id username todos{description id title completed}}}`

const UPDATE_TODO = gql`mutation($input: TodoUpdateInput! $where: TodoWhereUniqueInput!)
{
  updateOneTodo(data: $input where: $where)
  {
    title
    description
    completed
    id
  }
}`

const DELETE_TODO = gql`mutation($input: TodoWhereUniqueInput!) {deleteOneTodo(where: $input){id}}`

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
    const username = localStorage.getItem('username') || ""
    console.log(username)
    this.getUserTodos(username).subscribe((result: User) => {
      this.user = result
    }, (error: any) => {
      console.log("ERROR :", error)
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
              localStorage.setItem('username', this.user.username)
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

  logout(): boolean {
    if (!!this.user) {
      this.user = null
      localStorage.removeItem('username')
      return true
    } else {
      return false
    }

  }

  updateTodo(todo: Todo): Observable<Todo> {
    return new Observable<Todo>((subscriberEvent) => {
      this.apollo.mutate<TodoQueryResponse>({
        mutation: UPDATE_TODO,
        variables: {
          "input": { "title": { "set": todo.title }, "description": { "set": todo.description }, "completed": { "set": todo.completed } },
          "where": { "id": todo.id }
        }
      }).subscribe((result: MutationResult<TodoQueryResponse>) => {
        console.log("Result :", result)
        let todo = result?.data?.updateOneTodo
        if (!!todo) {
          console.log("Result :", todo)
          // TODO: update this.user
          // on supprime l'ancien todo non mis à jour
          const todoId = todo.id
          let todos = this.user?.todos.filter(item => item.id != todoId)
          // On verif que la liste restante n'est pas vide
          if (!!todos) {
            // On ajoute le todo mis à jour
            todos = [...todos, todo]
          } else {
            // On crée un tableau avec celui existant
            todos = [todo]
          }
          // On affect le nouveau tableau dans this.user
          if (!!this.user) {
            this.user.todos = [...todos];
          }
          subscriberEvent.next(todo)
        } else {
          subscriberEvent.error("unable to update Todo")
        }
      }, (error: any) => {
        subscriberEvent.error(error)
      })
    })
  }

  createTodo(title: String, description: String, userId: Number): Observable<Todo> {
    console.log('1')
    return new Observable<Todo>((subscriber) => {
      console.log('1')
      this.apollo.mutate<TodoQueryResponse>({
        mutation: CREATE_TODO,
        variables: { "input": { "title": title, "description": description, "user": { "connect": { "id": userId } } } }
      }).subscribe((result: MutationResult<TodoQueryResponse>) => {
        console.log("Result :", result)
        let todo = result?.data?.createOneTodo
        if (!!todo) {
          if (!!this.user) {
            if (!!this.user.todos) {
              this.user = { ...this.user, todos: [...this.user.todos, todo] };
            } else {
              this.user = { ...this.user, todos: [todo] };
            }
          }
          subscriber.next(todo)
        } else {
          subscriber.error("unable to create Todo")
        }
      }, (error: any) => {
        subscriber.error(error)
      })
    })
  }

  deleteTodo(todoId: Number): Observable<Todo> {
    return new Observable<Todo>((subscriberEvent) => {
      this.apollo.mutate<TodoQueryResponse>({
        mutation: DELETE_TODO,
        variables: { "input": { "id": todoId } }
      }).subscribe((result: MutationResult<TodoQueryResponse>) => {
        console.log("Result :", result)
        let todo = result?.data?.deleteOneTodo
        if (!!todo) {
          console.log("Result :", result)
          // le filter est un foreach avec un if dedand et retourne un autre tableau filtrer par le if
          const todos = this.user?.todos.filter(todo => todo.id != todoId)
          if (!!this.user && !!todos) {
            this.user.todos = [...todos];
          }
          subscriberEvent.next(todo)
        } else {
          subscriberEvent.error("unable to delete Todo")
        }
      }, (error: any) => {
        subscriberEvent.error(error)
      })
    })
  }

  // Méthode de classe qui est une focntion qui récupère le user et les todos qui lui sont affectés
  getUserTodos(username: String): Observable<User> {
    // On stock l'observable valueChanges dans graphqlRequest
    const graphqlRequest =
      this.apollo.watchQuery<UserQueryResponse>({
        query: GET_USER,
        variables: { "input": { "username": username } },
        fetchPolicy: "no-cache"
      }).valueChanges

    // On crée et retourne un Observable de User et on definit le comportement de l'observable
    // Le subscriber définit le comportement lorsqu'on va faire un appel .subscribe
    return new Observable<User>(
      (subscriber) => {
        // on subscribe a graphqlRequest pour recup' le resultat de la requêt graphQL
        graphqlRequest.subscribe(
          // le "next" est ici et se déclenche quand la requête graphQL se passe bien
          (result: ApolloQueryResult<UserQueryResponse>) => {
            // le traitement sépare la requête graphQL de la donnée qui nous intéresse c'est à dire le user
            console.log('Result : ', result)
            const user = result.data.user
            console.log("user :", user)
            // ON verifie qu'il n'est pas null/vide/undefined
            if (!!user) {
              // on déclenche l'evt "next"
              subscriber.next(user)
            } else {
              // sinon l'evt "error"
              subscriber.error("User not found")
            }
          },
          // le bloc error de graphQL
          (error: any) => {
            // On déclenche l'evt error, on transfère l'error graphQL
            subscriber.error(error)
          }
        )
      })
  }
}
