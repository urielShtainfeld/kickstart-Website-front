import {Injectable} from "@angular/core";
import {User} from "../auth/user.model";
import {Subject} from "rxjs/Subject";
import {Project} from "../project/project.model";

@Injectable()
export class userService{
  userChanged = new Subject<User>();
  private user: User ;

  setUser(user: User){
    this.user = user;
    this.userChanged.next(this.user);
  }
  getUser(){
    return this.user;
  }
  getUserType(){
    return this.user.usertype;
  }
}
