import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 appname = 'hello-world';
 name = 'John';
 getName()
 {
   return this.name
 }
 obj={
   name: 'peter',
   age: 20
 }
 arr = ['Bruce', 'Peter', 'John', 'Ali']
}
