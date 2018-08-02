import {Injectable} from "@angular/core";
import {User} from "../auth/user.model";
import {Subject} from "rxjs/Subject";
import {Project} from "../project/project.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class userService{
  userChanged = new Subject<string>();
  constructor(private localStorage: LocalStorageService){

  }
  setUser(user: User){
    this.localStorage.set('username',user.username);
    this.localStorage.set('usertype',user.usertype);
    this.userChanged.next(user.username);
  }
  getUserName(){
    return this.localStorage.get('username');
  }
  getUserType(){
    return this.localStorage.get('usertype');
  }
  signOutUser(){
    this.localStorage.remove('username');
    this.localStorage.remove('usertype');
    this.userChanged.next('guest');
  }
}
