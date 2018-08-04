import { Component, OnInit } from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";

@Component({
  selector: 'app-kickedout-project-list',
  templateUrl: './kickedout-project-list.component.html',
  styleUrls: ['./kickedout-project-list.component.css']
})
export class KickedoutProjectListComponent implements OnInit {

  kickedoutProjects: Project[] = [];

  constructor(private projectService: projectService){}

  ngOnInit() {
    this.projectService.kickedoutProjectsChanged.subscribe(
      (projects: Project[]) => {
        this.kickedoutProjects = projects;
      }
    );
    this.kickedoutProjects = this.projectService.getKickedoutProjects();
  }

}
