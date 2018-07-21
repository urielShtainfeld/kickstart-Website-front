import { Component, OnInit } from '@angular/core';
import {projectService} from "../../shared/project.service";
import {Project} from "../project.model";

@Component({
  selector: 'app-live-projects',
  templateUrl: './live-projects.component.html',
  styleUrls: ['./live-projects.component.css']
})
export class LiveProjectsComponent implements OnInit {
  selectedProj: Project;

  constructor(private projectService: projectService) { }

  ngOnInit() {
    this.projectService.projectSelected
      .subscribe(
        (recipe: Project) => {
          this.selectedProj = recipe;
        }
      );
  }

}
