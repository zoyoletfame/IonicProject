import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  mangas : Array<string> = ["fairy tail" , "overlord"];
  constructor(public navCtrl: NavController) {

  }
  tabs = ['ตอนที่ 1', 'ตอนที่ 2', 'ตอนที่ 3', 'ตอนที่ 4', 'ตอนที่ 5', 'ตอนที่ 6'];
  currentTab = 'ตอนที่ 1';

  // setTab(tab) {
  //     this.currentTab = tab;
  // }

  prev() {
      if (this.currentTab !== this.tabs[0]) {
          let currTab = this.currentTab;
          let i = this.tabs.findIndex(function (el) {
              return el === currTab;
          });
          this.currentTab = this.tabs[i - 1];
          console.log(this.currentTab);
      }
  }

  next() {
      if (this.currentTab !== this.tabs[this.tabs.length - 1]) {
          let currTab = this.currentTab;
          let i = this.tabs.findIndex(function (el) {
              return el === currTab;
          });
          this.currentTab = this.tabs[i + 1];
          console.log(this.currentTab);
          
      }
  }

 

}
