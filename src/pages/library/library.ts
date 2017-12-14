import { Component ,NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadPage } from '../read/read';
import { UploadNewMangaPage } from '../upload-new-manga/upload-new-manga';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
    mangaLists : Array<any> = [{image:"https://vignette.wikia.nocookie.net/fairytail/images/0/00/Character_Slider_no_2.jpg/revision/latest/scale-to-width-down/500?cb=20130117033701",name:"fairy tail"},
    {image:"https://i.ytimg.com/vi/Qh5HSdI5oGE/maxresdefault.jpg",name:"FullMetal Achemist"}];
  
    library: string = "favorite";
  
    
    constructor(public navCtrl: NavController,private ngZone: NgZone) {
    
    }
    
    ReadPage(){
      this.navCtrl.push(ReadPage)
    }

    refresh(){
      this.ngZone.run(()=>{}); //code for re-rendner component    }
    }

    uploadNewManga(){
      this.navCtrl.push(UploadNewMangaPage);
    }
}
