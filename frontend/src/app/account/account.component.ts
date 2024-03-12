import { Component } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { FormsModule } from '@angular/forms';
import { Todo, User } from '../models/graphql.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  resultStatus: String = ""

  newTitle: String = ""

  newDescription: String = ""

  constructor(public graphqlService: GraphqlService) {
  }

  addTodo() {
    if (!this.newTitle) {
      this.resultStatus = "no title define"
      return
    }
    if (!this.newDescription) {
      this.resultStatus = "no description define"
      return
    }
    if (!this.graphqlService.user) {
      this.resultStatus = "no user defined"
      return
    }
    // 
    this.graphqlService.createTodo(this.newTitle, this.newDescription, this.graphqlService.user.id)
      .subscribe(
        (todo: Todo) => {
          // nettoie les champs
          this.newTitle = '';
          this.newDescription = '';
        }
      )
  }

  changeTodo(id: Number, updatedComplete: Boolean, updatedTitle: String, updatedDescription: String) {
    let updatedTodo = this.graphqlService.user?.todos.find(todo => todo.id == id)
    if (!!updatedTodo) {
      updatedTodo = { ...updatedTodo, title: updatedTitle, description: updatedDescription, completed: updatedComplete };
      this.graphqlService
        .updateTodo(updatedTodo).subscribe((todo: Todo) => {

        }, (error: any) => {
          console.log("ERROR :", error)
          this.resultStatus = error
        })
    }
  }

  removeTodo(id: Number) {
    this.graphqlService
      .deleteTodo(id).subscribe((result: Todo) => {
      })
  }
}
