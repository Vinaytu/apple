import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  canExit() : boolean {
 
    if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }
    
  }

