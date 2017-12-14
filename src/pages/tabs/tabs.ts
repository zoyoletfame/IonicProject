import { Component } from '@angular/core';

import { RankingPage } from '../ranking/ranking';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { LibraryPage } from '../Library/library';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RankingPage;
  tab3Root = LibraryPage;
  tab4Root = ProfilePage;
 
  constructor() {

  }
}
