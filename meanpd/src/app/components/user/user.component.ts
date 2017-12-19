import { Component, OnInit } from '@angular/core';
// import { EHOSTUNREACH } from 'constants';
import { DataService} from '../../services/data.service';

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
users:User[];
isEdit:boolean;
addedHobby:string;

  constructor(private dataService:DataService) {
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
  
    this.dataService.getUsers().subscribe((users) => {
     this.users = users;
    });    
    this.isEdit = false;
    this.addedHobby = '';
  }

  onClick(){
    console.log('Real identity revealed!');
    this.name = 'Tyler Blake';
  }

  addHobby(hobby){
    console.log('Adding hobby ' + hobby);
    this.hobbies.push(hobby);
    this.addedHobby = '';
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

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address{
  street:string,
  city:string,
  state:string,
  zip:string
}

interface User{
  id:number,
  name:string,
  username:string,
  phone:string
}