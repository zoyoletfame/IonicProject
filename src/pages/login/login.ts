import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import {Platform} from 'ionic-angular';
import firebase from 'firebase';
import { UserProvider } from '../../providers/user/user';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  connectStatus: any;
  
  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              public platform:Platform,
              private facebook:Facebook, 
              public userProv: UserProvider) {
    const config = {
      apiKey: "AIzaSyDNPzgam3Br4PIa4sz5F3h29Q-A2au3azM",
      authDomain: "ionic-todo-c79b2.firebaseapp.com",
      databaseURL: "https://ionic-todo-c79b2.firebaseio.com",
      projectId: "ionic-todo-c79b2",
      storageBucket: "ionic-todo-c79b2.appspot.com",
      messagingSenderId: "866331804474"
    };
    firebase.initializeApp(config);

    this.checkAuthen();
  }

  login(){
    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      this.checkAuthen();
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }
  
  checkAuthen(){
    this.facebook.getLoginStatus().then((res) => {
      this.connectStatus = res;
      if(this.connectStatus.status == 'connected'){
        
        this.facebook.api("/me?fields=id,name,picture",['public_profile']).then(res => {
          console.log(res);
          this.userProv.saveUser(res.id, res.name, res.picture.data.url);
          firebase.database().ref().child('user').child(res.id).update({name: res.name});
          this.navCtrl.setRoot(TabsPage);
        });
      }
    })
    .catch(e => console.log('Error Status', e)); 
  }
}