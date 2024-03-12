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
    console.log (this.graphqlService.user)
  }

  addTodo(/*title: String, description: String*/) {
    console.log('test addtodo')
    if (!this.newTitle) {
      this.resultStatus = "no title define"
      console.log(this.resultStatus)
      return
    }
    if (!this.newDescription) {
      this.resultStatus = "no description define"
      console.log(this.resultStatus)
      return
    }
    if (!this.graphqlService.user) {
      this.resultStatus = "no user defined"
      console.log(this.resultStatus)
      return
    }
    // 
    this.graphqlService.createTodo(this.newTitle, this.newDescription, this.graphqlService.user.id)
      .subscribe(
        (todo: Todo) => {
          // Cette méthode "push" ne fonctionne pas pck les props de this.user sont en lecture seule
          // this.user.todos.push(todo)
          // A la place, on remplace la props this.user.todos par elle même avec le todo fraîchement crée
          // this.user.todos = [...this.user.todos, todo]
          //  Ajoute un controle si this.user.todos est vide
          // On utilise le "!!" pour verif this.user.todos n'est pas vide/null/undifined
          
          // nettoie les champs
          this.newTitle = '';
          this.newDescription = '';
        }
      )
  }

  changeTodo(id: Number, updatedComplete: Boolean, updatedTitle: String, updatedDescription: String) {
    let updatedTodo = this.graphqlService.user?.todos.find(todo => todo.id == id)
    console.log("variable :", updatedTodo)
    if (!!updatedTodo) {
      // updatedTodo.title = updatedTitle
      updatedTodo = { ...updatedTodo, title: updatedTitle, description: updatedDescription, completed: updatedComplete };
      console.log(updatedTodo)
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
