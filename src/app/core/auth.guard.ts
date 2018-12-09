import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/services/auth.service';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isSignedInStream.pipe(map<boolean, boolean>((isSignedIn: boolean) => {
      if(!isSignedIn) {
        this.router.navigate(['login']);
      } 
      return isSignedIn;
      })
    )}
  }
