import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies:string[];

  constructor(private dataService:DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Darth Vader';
    this.age = 30;
    this.email = 'darth@sith.com';
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Pod racing', 'Dark Side', 'Conquering the Weak'];
  }

  onClick() {
    console.log("Clicked!");
    this.name = "Anakin Skywalker";
    this.hobbies.push('Building Robots');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}
