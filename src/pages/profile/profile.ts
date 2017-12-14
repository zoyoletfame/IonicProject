import { Component } from '@angular/core';
import { NavController , AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  displayName;
  photo;

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private facebook:Facebook) {
    /*
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;  
      this.photo = user.photoURL;    
    });
    */
  }
  setting(myEvent) {
    let alert = this.alertCtrl.create({
      title: 'Setting',
      buttons: ['Submit']
    });
    alert.present();
  }
  
  annouce(myEvent) {
    let alert = this.alertCtrl.create({
      title: 'Annouce',
      subTitle: 'มีการอัพเดทฟังก์ชั่นใหม่ๆเร็วๆนี้',
      buttons: ['Submit']
    });
    alert.present();
  }

  help(myEvent) {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'สามารถติดต่อ admin ได้ใน inbox ครับ',
      buttons: ['Submit']
    });
    alert.present();
  }

  signOut() {
    this.facebook.logout().then(res => {
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(e => console.log('Error logout', e));; 
  }

}
