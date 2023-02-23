import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    User_Name ="Vinay"
    password  = 1234
  
      fun1(){
        console.log(this.User_Name);
        console.log(this.password);
      }
  }


