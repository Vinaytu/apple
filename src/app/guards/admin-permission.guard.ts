import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from 'app/services/shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPermissionGuard implements CanActivate {

  constructor(private sharedservice:SharedService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.sharedservice.checkisUserlogedin()){
        return true;
      }
        else{
          alert("you don't have permission to access this page");
          return false;
        }
      }
  }
  
