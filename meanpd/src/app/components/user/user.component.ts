import { Component, OnInit } from '@angular/core';
import { EHOSTUNREACH } from 'constants';

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

  addHobby(hobby){
    console.log('Adding hobby ' + hobby);
    this.hobbies.push(hobby);
    return false;
  }

  removeHobby(hobby){
    console.log('Removing hobby ' + hobby);
    for(let i = 0;i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }


}


interface Address{
  street:string,
  city:string,
  state:string,
  zip:string
}