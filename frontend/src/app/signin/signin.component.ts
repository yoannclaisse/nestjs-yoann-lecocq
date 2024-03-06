import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';
import { User } from '../models/graphql.model';

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
    this.graphqlService.signin(username, mail, password).subscribe(
      // le premier evt d'un Observalble sera toujours next, CAD qu'on retourne une valeur si tout s'est bien passé
      (result: User) => {
      },
      //  Le 2e evt d'un Observable sera toujour error
      (error: any) => {
        console.log("ERROR :", error)
      }
    )
  }

}
