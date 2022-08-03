import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'hemenal';
  
  users = [
    {name: "M. Ali", age: 45, isMarried: true},
    {name: "Ayşe", age: 25, isMarried: false},
    {name: "Ahmet", age: 35, isMarried: true},
    {name: "Mustafa", age: 20, isMarried: false}
  ]

}
