import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';
import { User } from '../models/graphql.model';

@Component({
  selector: 'app-signin',
  standalone: true,
  providers: [],
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {

  signinStatusError: String = ""
  signinStatusSuccess: String = ""

  constructor(private graphqlService: GraphqlService) { }
  signin(username: string, mail: string, password: string) {
    // verification du champs username
    this.signinStatusError = ""
    if (!username) {
      this.signinStatusError = "Please enter a name"
      return
    }

    // verification du champs mail
    this.signinStatusError = ""
    if (!mail) {
      this.signinStatusError = "Please enter a valid mail"
      return
    }

    // verification du champs password
    this.signinStatusError = ""
    if (!password) {
      this.signinStatusError = "Please enter a valid password"
      return
    }

    this.graphqlService.signin(username, mail, password).subscribe(
      // le premier evt d'un Observalble sera toujours next, CAD qu'on retourne une valeur si tout s'est bien passé
      (result: User) => {
        this.signinStatusSuccess = "Congratulation, you are registred now, go to login page to connect to your account"
      },
      //  Le 2e evt d'un Observable sera toujour error
      (error: string) => {
        console.log("ERROR :", error)
        const errorMessage: string = error + ''
        if(errorMessage.includes('Unique constraint failed on the fields: (`email`)') ) {
          this.signinStatusError = 'email already used'
        }

        if(errorMessage.includes('Unique constraint failed on the fields: (`username`)') ) {
          this.signinStatusError = 'username already used'
        }
      }
    )
  }

}
