import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  id: string;
  name: string;
  picture: string;

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  saveUser(id: string, name: string, picture: string){
    this.id = id;
    this.name = name;
    this.picture = picture;
  }

}
