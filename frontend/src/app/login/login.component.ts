import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';
import { User } from '../models/graphql.model';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [GraphqlService, Apollo],
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private graphqlService: GraphqlService) { }

  // ICI on met en place la fonction "onclick" login qui va faire les verifications depuis le graphql.service.ts lorsque l'on click sur le button login
  login(mail: string, password: string) {
    this.graphqlService.login(mail, password).subscribe(
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
