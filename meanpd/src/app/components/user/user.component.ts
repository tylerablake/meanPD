import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string;
age: number;
email: string;
address:Address;
hobbies:string[];

  constructor() {
    console.log('Constructor ran..')
   }

  ngOnInit() {
    console.log('ngOnInit ran..')
    this.name = "John Doe";
    this.age = 30;
    this.email = 'john@email.com';
    this.address = {
      street : '1 User Way',
      city : 'Louisville',
      state : 'KY',
      zip : '40222'
    };
    this.hobbies = ['Eat', 'Sleep', 'Code'];
  }

  onClick(){
    console.log('Real identity revealed!');
    this.name = 'Tyler Blake';
  }

}


interface Address{
  street:string,
  city:string,
  state:string,
  zip:string
}