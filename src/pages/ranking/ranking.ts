import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html'
})
export class RankingPage {
  mangas : Array<string> = ["fairy tail" , "FullMetal Achemist"];
  constructor(public navCtrl: NavController) {

  }
  readPage(){
    this.navCtrl.push(ReadPage)
  }
}
