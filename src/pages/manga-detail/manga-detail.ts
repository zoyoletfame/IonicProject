import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
@Component({
  selector: 'page-manga-detail',
  templateUrl: 'manga-detail.html'
})
export class MangadetailPage {
  mangaLists : Array<any> = [{image:"https://vignette.wikia.nocookie.net/fairytail/images/0/00/Character_Slider_no_2.jpg/revision/latest/scale-to-width-down/500?cb=20130117033701",page:"ตอนที่ 1"},
  {image:"https://i.ytimg.com/vi/Qh5HSdI5oGE/maxresdefault.jpg",page:"ตอนที่ 2"}];
  constructor(public navCtrl: NavController) {

  }
  readPage(){
    this.navCtrl.push(ReadPage)
  }
}
