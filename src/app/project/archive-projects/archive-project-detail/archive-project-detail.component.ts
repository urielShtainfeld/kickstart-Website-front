import {Component, OnInit} from '@angular/core';
import {Project} from "../../project.model";
import {projectService} from "../../../shared/project.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-archive-project-detail',
  templateUrl: './archive-project-detail.component.html',
  styleUrls: ['./archive-project-detail.component.css']
})
export class ArchiveProjectDetailComponent implements OnInit {

  proj: Project;
  id: number;

  constructor(private projectsService: projectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.proj = this.projectsService.getArchiveProjects()[this.id];
      }
    );
  }

}
