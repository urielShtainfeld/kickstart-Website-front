import { Component, OnInit } from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";

@Component({
  selector: 'app-archive-project-list',
  templateUrl: './archive-project-list.component.html',
  styleUrls: ['./archive-project-list.component.css']
})
export class ArchiveProjectListComponent implements OnInit {
  archiveProjects: Project[] = [];

  constructor(private projectService: projectService){}

  ngOnInit() {
    this.projectService.archiveProjectsChanged.subscribe(
      (projects: Project[]) => {
        this.archiveProjects = projects;
      }
    );
    this.archiveProjects = this.projectService.getArchiveProjects();
  }

}
