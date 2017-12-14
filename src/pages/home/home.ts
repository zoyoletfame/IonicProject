import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MangadetailPage } from '../manga-detail/manga-detail';
import { ReadPage } from '../read/read';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //pictures: FirebaseListObservable<any[ ]> ;
  mangaLists : Array<any> = [{image:"https://vignette.wikia.nocookie.net/fairytail/images/0/00/Character_Slider_no_2.jpg/revision/latest/scale-to-width-down/500?cb=20130117033701",name:"Fairy tail"},
  {image:"https://i.ytimg.com/vi/Qh5HSdI5oGE/maxresdefault.jpg",name:"FullMetal Achemist"}];

  
  pictures : Array<any> = ["https://vignette.wikia.nocookie.net/fairytail/images/0/00/Character_Slider_no_2.jpg/revision/latest/scale-to-width-down/500?cb=20130117033701",
                          "https://i.ytimg.com/vi/Qh5HSdI5oGE/maxresdefault.jpg"];
  constructor(public navCtrl: NavController) {
    // this.pictures = angularfire.list('/picture') ;
    
  }
  // addItem(){
  //   let newTask : string = prompt("newTask");
  //   if(newTask !== ''){
  //     this.pictures.push({title:newTask})
  //   }
  // }
  mangaDetail(){
    this.navCtrl.push(MangadetailPage)
  }

  readPage(){
    this.navCtrl.push(ReadPage)
  }
}
