import { Component, OnInit } from '@angular/core';
import {projectService} from "../../shared/project.service";


@Component({
  selector: 'app-live-projects',
  templateUrl: './live-projects.component.html',
  styleUrls: ['./live-projects.component.css']
})
export class LiveProjectsComponent implements OnInit {


  constructor(private projectService: projectService) { }

  ngOnInit() {

  }

}
