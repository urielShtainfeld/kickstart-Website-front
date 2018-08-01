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
  }
  onSaveData(){
    this.serverService.storeProject();

  }
  onGetData(){
    this.serverService.getProjects();
  }
  getConnectetUserName(){
    if(this.userService.getUser()){
      this.connectedUser = this.userService.getUser().username;
    }else {
      this.connectedUser = 'guest'
    }
  }
}
