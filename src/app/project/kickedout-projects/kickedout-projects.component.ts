import { Component, OnInit } from '@angular/core';
import {Project} from "../project.model";
import {projectService} from "../../shared/project.service";

@Component({
  selector: 'app-kickedout-projects',
  templateUrl: './kickedout-projects.component.html',
  styleUrls: ['./kickedout-projects.component.css']
})
export class KickedoutProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
