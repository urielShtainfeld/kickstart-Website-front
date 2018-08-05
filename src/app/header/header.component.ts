import {Component, OnInit} from '@angular/core';
import {ServerService} from "../shared/server.service";
import {userService} from "../shared/user.service";
import {projectService} from "../shared/project.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser: string;
  noOfLivePorojects: number = 0;
  noOfKickedOut: number = 0;

  constructor(private serverService: ServerService, private userService: userService, private projectService: projectService) {
  }

  ngOnInit() {
    this.getConnectetUserName();
    this.userService.userChanged.subscribe((userName: string) => {
      this.connectedUser = userName;
    });

    this.noOfLivePorojects = this.projectService.getProjects().length;
    this.noOfKickedOut = this.projectService.getKickedoutProjects().length;

    this.projectService.projectsChanged.subscribe(() => {
      this.noOfLivePorojects = this.projectService.getProjects().length;
    });
    this.projectService.kickedoutProjectsChanged.subscribe(() => {
      this.noOfKickedOut = this.projectService.getKickedoutProjects().length;
      this.serverService.loadingFinished = true;
    });

  }
  OnPressHome(){
    this.serverService.loadingFinished = false;
  }

  getConnectetUserName() {
    if (this.userService.getUserName()) {
      this.connectedUser = this.userService.getUserName();
    } else {
      this.connectedUser = 'guest'
    }
  }

  signOut() {
    this.userService.signOutUser();
  }
}
