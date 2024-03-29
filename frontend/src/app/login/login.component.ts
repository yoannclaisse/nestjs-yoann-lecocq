import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Apollo } from 'apollo-angular';
import { User } from '../models/graphql.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [],
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginStatus: String = ""

  constructor(private graphqlService: GraphqlService, private router: Router) { }

  login(mail: string, password: string) {
        // verification du champs username
        this.loginStatus = ""
    
        // verification du champs mail
        this.loginStatus = ""
        if (!mail) {
          this.loginStatus = "Please enter a valid mail"
          return
        }
    
        // verification du champs password
        this.loginStatus = ""
        if (!password) {
          this.loginStatus = "Please enter a valid password"
          return
        }
    this.graphqlService.login(mail, password).subscribe(
      // le premier evt d'un Observalble sera toujours next, CAD qu'on retourne une valeur si tout s'est bien passé
      (result: User) => {
        this.router.navigateByUrl('/account')
      },
      //  Le 2e evt d'un Observable sera toujour error
      (error: any) => {
        console.log("ERROR :", error)
      }
    )
  }
}
