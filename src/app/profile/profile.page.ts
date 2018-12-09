import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{
  email: string;
  photo: string;
  displayName: string;
  @ViewChild('newemail') newEmail;

  constructor(private fire: AngularFireAuth, private router: Router, private auth: AuthService) { 
    
    // Uncomment if enabling username signin

    // let rgx = /([@])\w+/g;
    // if(this.fire.auth.currentUser.email.match(rgx).toString() == '@gmail') {
    //   this.email = this.fire.auth.currentUser.email;
    // } else {
    //   let rgxUser = /\w+(?=@)/g;
    //   this.email = this.fire.auth.currentUser.email.match(rgxUser).toString()
    // }

    this.email = this.fire.auth.currentUser.email;

    //pull image from google profile or display default image
   this.photo = this.fire.auth.currentUser.photoURL;
  
    
    this.displayName = this.fire.auth.currentUser.displayName;
    
    }
  logout() {
    this.auth.logout();
  }
  submit() {
    console.log(this.newEmail.value)
    this.fire.auth.currentUser.updateEmail(this.newEmail.value);
  }
  
  
  ngOnInit() {
   $('#update-email').click(function() {
     $('#email-input').show();
   })
   $('#submit').click(function() {
     $('#email-input').hide();
   })
  }
  
}
