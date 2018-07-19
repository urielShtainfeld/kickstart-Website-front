import {Component, EventEmitter, OnInit} from '@angular/core';
import {Project} from "../project.model";
import {projectService} from "../../shared/project.service";

@Component({
  selector: 'app-live-projects-list',
  templateUrl: './live-projects-list.component.html',
  styleUrls: ['./live-projects-list.component.css']
})
export class LiveProjectsListComponent implements OnInit {
  selectedProject :Project;
  liveProjects: Project[] = [];

  constructor(private projectService: projectService) { }

  ngOnInit() {
    this.liveProjects = this.projectService.getProjects();
  }
}
