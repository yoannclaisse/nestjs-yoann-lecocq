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

  signinStatus: String = ""

  constructor(private graphqlService: GraphqlService) { }
  signin(username: string, mail: string, password: string) {
    // verification du champs username
    this.signinStatus = ""
    if (!username) {
      this.signinStatus = "Please enter a name"
      return
    }

    // verification du champs mail
    this.signinStatus = ""
    if (!mail) {
      this.signinStatus = "Please enter a valid mail"
      return
    }

    // verification du champs password
    this.signinStatus = ""
    if (!password) {
      this.signinStatus = "Please enter a valid password"
      return
    }

    this.graphqlService.signin(username, mail, password).subscribe(
      // le premier evt d'un Observalble sera toujours next, CAD qu'on retourne une valeur si tout s'est bien passé
      (result: User) => {
      },
      //  Le 2e evt d'un Observable sera toujour error
      (error: string) => {
        console.log("ERROR :", error)
        const errorMessage: string = error + ''
        if(errorMessage.includes('Unique constraint failed on the fields: (`email`)') ) {
          this.signinStatus = 'email already used'
        }

        if(errorMessage.includes('Unique constraint failed on the fields: (`username`)') ) {
          this.signinStatus = 'username already used'
        }
      }
    )
  }

}
