import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('DataService connected..');
   }

   getUsers(){
     return this.http.get('http://jsonplaceholder.typicode.com/users')
     .map(res => res.json());

   }


}
