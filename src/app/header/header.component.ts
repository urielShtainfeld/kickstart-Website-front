import {Component, OnInit} from '@angular/core';
import {ServerService} from "../shared/server.service";
import {userService} from  "../shared/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  connectedUser: string;

  constructor(private serverService: ServerService,private userService: userService){}
  ngOnInit(){
    this.getConnectetUserName();
    this.userService.userChanged.subscribe((userName: string) => {
      this.connectedUser = userName;
    });
  }
  onSaveData(){
    this.serverService.storeProject();

  }
  onGetData(){
    this.serverService.getProjects();
  }
  getConnectetUserName(){
    if(this.userService.getUserName()){
      this.connectedUser = this.userService.getUserName();
    }else {
      this.connectedUser = 'guest'
    }
  }
  signOut(){
    this.userService.signOutUser();
  }
}
