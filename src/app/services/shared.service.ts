import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public serviceMessage:string="This is Default Shared Service Msg";
  public count = 0;

  isUserlogedIn:boolean = false;

  constructor() { }

  public setmessage(msg:string){
    this.serviceMessage=msg;
  }

  increment(){
    this.count++
  }

  setlogin(){
    this.isUserlogedIn =true;
  }

  setlogout(){
    this.isUserlogedIn =false;
  }

  checkisUserlogedin(){
    return this.isUserlogedIn;
  }
}
