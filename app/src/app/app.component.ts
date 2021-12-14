import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // name = 'Amrita';
  // disableBox = true;
  // enableBox()
  // {
  //   this.disableBox = false
  // }

  // if else condition
  // show = true;
  // condition = 'yes';

  // switch case
  // color = 'red';
  
  // for loop
  //data=['Amrita', 'peter', 'sam', 'bruce']
//   arrobj = [
//     {
//       name: 'anil',
//       age: 25
//     },
//     {
//       name: 'peter',
//       age: 34
//     },
//     {
//       name: 'bruce',
//       age: 39
//     },
//     {
//       name: 'sam',
//       age: 20
//     }
//   ]

// Class Binding
public name = "Codevolution";
public message = "Welcome to codevolution"
public person = {
  "firstName": "John",
  "lastName": "Doe"
};
public date = new Date();
// public successClass = "text-success";
// public hasError = false;
// public isSpecial = true;
// public messageClasses = {
//   "text-success": !this.hasError,
//   "text-danger": this.hasError,
//   "text-special": this.isSpecial
// }

// Style Binding
// public highlightColor = "orange";
// public hasError = true;
// public titleStyle = {
//   color: "blue",
//   fontStyle: "italic"
// }

// Event Binding
// public greeting = "";
// onClick(){
//   console.log('welcome to Codevolution')
//   this.greeting = "welcome to codevolution"
// }


}
