import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})


export class HomeGuard implements CanActivate {

  constructor(
    private router : Router,
    private authService : AuthService
  ){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
      var isAuth = this.authService.isAuth();

      if(!isAuth){
        this.router.navigate(['/']);

        return false;
      }
      return true;

  }
  
}
