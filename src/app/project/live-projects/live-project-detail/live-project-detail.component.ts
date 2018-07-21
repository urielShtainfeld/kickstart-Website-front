import { Component, OnInit ,Input} from '@angular/core';
import {Project} from "../../project.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {projectService} from "../../../shared/project.service";

@Component({
  selector: 'app-live-project-detail',
  templateUrl: './live-project-detail.component.html',
  styleUrls: ['./live-project-detail.component.css']
})
export class LiveProjectDetailComponent implements OnInit {
  proj: Project;
  constructor(private projectsService: projectService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.proj = this.projectsService.getProjectById(+params['id']);
      }
    );
  }

  onClickEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
