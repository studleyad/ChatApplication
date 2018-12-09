import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  signIn() {
    this.router.navigate(['login']);
  }
  signUp() {
    this.router.navigate(['register']);
  }
}
