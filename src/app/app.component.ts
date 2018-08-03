import { Component } from '@angular/core';
import {projectService} from "./shared/project.service";
import {userService} from "./shared/user.service";
import {ServerService} from "./shared/server.service";
import {LocalStorageService} from "./shared/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [projectService,userService,ServerService,LocalStorageService]
})
export class AppComponent{
  constructor(private userService: userService){
    if (this.userService.getUserName()){
      this.userService.userAutenticated = true;
    }
  }
}
