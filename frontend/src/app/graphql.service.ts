import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  apollo: any;

  /**
   * 
   * @param apollo
   * @param httpLink 
   */
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // c'est ici que ça connecte le front avec le back
    this.apollo.create({
      cache: new InMemoryCache(),
      // ENVIRONMENT
      // Fetches from http://my-prod-url in production, http://my-dev-url in development.
      link: httpLink.create({ uri: environment.apiUrl }),
    })
  }
}
