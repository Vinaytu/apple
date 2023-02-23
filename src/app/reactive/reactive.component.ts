import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  regForm :FormGroup


  constructor(){
    this.regForm = new FormGroup({
      uname: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl(null,Validators.required),
      age: new FormControl(null,Validators.required),
      admin: new FormControl(Validators.required)
    }, this.passwordMatch);

  }  

  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@$%#]).{8,16}$'

  passwordMatch(rf:any){
    let password = rf.controls['password'].value;
    let cpassword = rf.controls['cpassword'].value;

    if (password === cpassword){
      return null;
    }
    else{
      return{
        'passwordMatch':true 
      }
    }
  }

  show(){
    console.log(this.regForm.value)
    this.regForm.reset()
  }

  createAccount(form:any){
    console.log(form.value);
  }
}
