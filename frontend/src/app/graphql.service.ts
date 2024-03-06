import { Injectable } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloQueryResult, InMemoryCache, gql } from '@apollo/client/core';
import { environment } from '../environments/environment.development';
import { User, UserQueryResponse } from './models/graphql.model';
import { Observable } from 'rxjs';
import { subscribe } from 'graphql';

// VARIABLES POUR GQL QUERIES
// { "user": {"email": {"equals": "test@test.com"}, "password": {"equals": "azerty789"}} }
const getUserByEmailAndPassword = gql`query getUserByEmailAndPassword($user: UserWhereInput!){
  findFirstUserOrThrow(where: $user) {
    id, username, email}
  }`

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  /**
   * 
   * @param apollo
   * @param httpLink 
   */
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    // c'est ici que ça connecte le front avec le back
    this.apollo.create({
      cache: new InMemoryCache(),
      // ENVIRONMENT
      // Fetches from http://my-prod-url in production, http://my-dev-url in development.
      link: httpLink.create({ uri: environment.apiUrl }),
    })
  }

  // ICI je  m'occupe de faire la query, elle retourne un observable et on analyse le sub et l'error
  login(mail: string, password: string): Observable<User> {
    const graphqlRequest =
      this.apollo.watchQuery<UserQueryResponse>({
        query: getUserByEmailAndPassword,
        variables: { "user": { "email": { "equals": mail }, "password": { "equals": password } } },
        fetchPolicy: "no-cache"
      }).valueChanges
    return new Observable<User>(
      (subscriber) => {
        graphqlRequest.subscribe(
          (result: ApolloQueryResult<UserQueryResponse>) => {
            const user = result.data.findFirstUserOrThrow
            if (!!user) {
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
}
