import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ronaldo'
  password = '123456'

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log("username = ", this.username);
    console.log("password = ", this.password);
  }

}
