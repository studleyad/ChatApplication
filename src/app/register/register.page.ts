import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  @ViewChild('fname') fname;
  @ViewChild('lname') lname;
  @ViewChild('phone') tel;
  displayName: string;

  constructor(private fire: AngularFireAuth, private router: Router) { 
    
  }

  

  signUp() {
    let rgxEmail = new RegExp("@");
    let rgxPword = /([A-Z])\w+\d/g;
    if(this.password.value.match(rgxPword) != null && this.password.value.length > 5 && this.password.value.length < 15) {
      this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value).then( data => {
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(data => {
          // this.fire.auth.currentUser.updatePhoneNumber(this.tel.value);
           let displayName = this.fname.value + " " + this.lname.value;
          this.fire.auth.currentUser.updateProfile({
            displayName: displayName,
            photoURL: "https://via.placeholder.com/150"
          })
        }).then(data => {
          this.router.navigate(['profile']);
        })
      })
    } else {
      alert('Password does not meet all requirements. Password must contain one capitol letter, must be between 6 and 16 characters, and atleast one digit 0-9.');
    }
  }
  ngOnInit() {
    console.log(this.fire.auth.currentUser)
  }
}

