import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from 'app/services/shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDeactivateGuard implements CanDeactivate<unknown> {

  constructor(shareService:SharedService){

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(confirm("Are you sure you want to leave the page?")){
        return true;
      }
      else {
        return false;
      }
  }
  
}
