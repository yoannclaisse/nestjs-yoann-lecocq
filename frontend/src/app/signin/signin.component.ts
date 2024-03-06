import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-signin',
  standalone: true,
  providers: [GraphqlService, Apollo],
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private graphqlService: GraphqlService) { }
  signin(username: string, mail: string, password: string) {
    throw new Error('Method not implemented.');
  }

}
