import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as $ from '../../../node_modules/jquery';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  @ViewChild('newmessage') message;
  user: string;
  
  sub;
  messages: object[];
  uid: string;
  constructor(private db: AngularFirestore, private fire: AngularFireAuth, private auth: AuthService) { 
    this.user = this.fire.auth.currentUser.displayName;
    this.uid = this.fire.auth.currentUser.uid; 
    this.sub = this.db.collection('/chat', ref => ref.orderBy('date', 'asc')).valueChanges().subscribe( data => { 
    this.messages = data;
      
    })
  }
  ngOnInit() {
    this.entranceNotification();
    this.hideDate();
    
  }
  hideDate() {
    $('.date').hide();
    $('.chat-bubble').click( function(){
      $('.date').toggle();
    })
    
  }

  entranceNotification() {
    let nDate = new Date().toDateString();
    let nTime = new Date().toLocaleTimeString();
    this.db.collection('/chat').add({
      username: this.user,
      date: new Date,
      time: nTime,
      stDate: nDate,
      message: 'has joined the chat.',
      specialMessage: true
    })
  }
  send() {
    let nDate = new Date().toDateString();
    let nTime = new Date().toLocaleTimeString();
    this.db.collection('/chat').add({
      uid: this.uid,
      username: this.user,
      message: this.message.value,
      date: new Date(),
      time: nTime,
      stDate: nDate,
      specialMessage: false
    }).then( data => {
      $('#minput').val('');
    })
  }
  colorChat() {
    let user = '.' + this.uid;
    console.log(user);

    // $(document).ready( function() {
    //   $(user).css('background-color', 'green !important')
    //   });
  }
  logout() {
    this.auth.logout();
  }
}
