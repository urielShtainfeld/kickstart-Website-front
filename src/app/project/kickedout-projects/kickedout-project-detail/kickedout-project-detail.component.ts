import { Component, OnInit } from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {userService} from "../../../shared/user.service";
import {ServerService} from "../../../shared/server.service";

@Component({
  selector: 'app-kickedout-project-detail',
  templateUrl: './kickedout-project-detail.component.html',
  styleUrls: ['./kickedout-project-detail.component.css']
})
export class KickedoutProjectDetailComponent implements OnInit {
  proj: Project;
  id: number;
  constructor(private projectsService: projectService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.proj = this.projectsService.getProjectById(this.id);
      }
    );
  }
}
