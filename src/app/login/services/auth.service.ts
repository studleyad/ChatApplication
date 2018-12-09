import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isSignedInStream: Observable<boolean>;

  constructor( private router: Router, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if(user) {
        
      } else {
        
      }
    });
    this.isSignedInStream = this.afAuth.authState.pipe(map<firebase.User, boolean>((user: firebase.User) => {
      return user != null;
    }));
  }
  logout() {
    this.afAuth.auth.signOut().then(data => {
    this.router.navigate(['login']);
    alert('You have successfully logged Out')
    });
  }
  
}