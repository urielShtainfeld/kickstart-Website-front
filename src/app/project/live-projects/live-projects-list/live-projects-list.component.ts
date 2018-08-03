import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {userService} from "../../../shared/user.service";

@Component({
  selector: 'app-live-projects-list',
  templateUrl: './live-projects-list.component.html',
  styleUrls: ['./live-projects-list.component.css']
})
export class LiveProjectsListComponent implements OnInit {
  liveProjects: Project[] = [];
  canCreate: boolean = false;

  constructor(private projectService: projectService, private router: Router , private route: ActivatedRoute, private userService: userService){}

  ngOnInit() {
    this.projectService.projectsChanged.subscribe(
      (projects: Project[]) => {
        this.liveProjects = projects;
      }
    );
    if(this.userService.userAutenticated ){
      if (this.userService.getUserType().toUpperCase() === 'ADMIN' || this.userService.getUserType().toUpperCase() === 'CREATOR') {
        this.canCreate = true;
      }else {
        this.canCreate = false;
      }
    }
    this.liveProjects = this.projectService.getProjects();
  }

  onNewProject(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
