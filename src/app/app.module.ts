import { NgModule, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NavController, Nav } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './login/services/auth.service';
import { AuthGuard } from './core/auth.guard';


const firebaseAuth = {
  apiKey: "AIzaSyDGMmt_tNQHDL7u0PZ6ZiMXBcaDlCc0n_I",
  authDomain: "test-project-f6515.firebaseapp.com",
  databaseURL: "https://test-project-f6515.firebaseio.com",
  projectId: "test-project-f6515",
  storageBucket: "test-project-f6515.appspot.com",
  messagingSenderId: "685100813424"
};

@NgModule({
  declarations: [
    AppComponent
    
    ],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Nav,
    AuthService,
    AuthGuard,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
