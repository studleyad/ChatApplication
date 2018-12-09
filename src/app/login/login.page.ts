import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  logo = "/assets/images/logo26.png"
  
constructor(private fire: AngularFireAuth, private router: Router){}

  ngOnInit() {

  }
  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(data =>
      this.router.navigate(['profile']));
  }
  signUp() {
    this.router.navigate(['register'])
  }
  googleSignIn = () => {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
      this.router.navigate(['profile']);
    })
  }

}
