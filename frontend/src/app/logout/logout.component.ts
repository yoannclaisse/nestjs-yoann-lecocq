import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private graphqlService: GraphqlService, private router: Router) {
    if(this.graphqlService.logout()) {
      console.log(this.graphqlService.user)
      this.router.navigateByUrl('/')
    }
  }
}
