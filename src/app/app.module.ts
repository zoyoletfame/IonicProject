import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';
import { RankingPage } from '../pages/ranking/ranking';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadPage } from '../pages/read/read';
import { LoginPage } from '../pages/login/login';
import { LibraryPage } from '../pages/Library/library';
import { MangadetailPage } from '../pages/manga-detail/manga-detail';
import { UploadNewMangaPage } from '../pages/upload-new-manga/upload-new-manga';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RankingPage,
    ProfilePage,
    TabsPage,
    ReadPage,
    LoginPage,
    LibraryPage,
    MangadetailPage,
    UploadNewMangaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RankingPage,
    ProfilePage,
    TabsPage,
    ReadPage,
    LoginPage,
    LibraryPage,
    MangadetailPage,
    UploadNewMangaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
