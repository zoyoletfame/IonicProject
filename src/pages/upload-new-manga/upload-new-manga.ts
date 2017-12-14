import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase, { database } from 'firebase';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UploadNewMangaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload-new-manga',
  templateUrl: 'upload-new-manga.html',
})
export class UploadNewMangaPage {

  cover: string;
  detailForm : FormGroup ;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              private camera: Camera,
              public userProv: UserProvider) {
    this.detailForm = this.formBuilder.group({
  		name: ['',Validators.required],
  	  detail: ['']
  	});
  }

  validate(): boolean{
    let errorMsg : string ;
    
    if (this.detailForm.valid){
      return true ;
    }else{
      let control = this.detailForm.controls['name'] ;
      if (control.invalid){
        if (control.errors['required']){
          errorMsg = 'จำเป็นต้องใส่ชื่อเรื่อง' ;
        } 
      }

      let alert = this.alertCtrl.create({
        title: 'ใส่ข้อมูลไม่ถูกต้อง!',
        subTitle: errorMsg,
        buttons: ['OK']
      });
      // show alert with error message
      alert.present();
    }
  }

  selectCover(){
    const options: CameraOptions = {
      quality: 100,
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    } ;

    this.camera.getPicture(options).then((imageData) => {
      this.cover = 'data:image/jpeg;base64,'+imageData ;
    }, (error) => {
      console.log('Error : '+error) ;
    });
  }

  save(){
    if(this.validate()){
      
      /*
      console.log("FORM VALUE: "+this.detailForm.value.name);
      console.log("PIC VALUE: "+this.cover);
      console.log("USER ID: "+this.userProv.id);
      */
      
      const storageRef =  firebase.storage().ref();
      const databaseRef = firebase.database().ref();
      databaseRef.child('toon').push({
        name: this.detailForm.value.name,
        
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadNewMangaPage');
  }

}
