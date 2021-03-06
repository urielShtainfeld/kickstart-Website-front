import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {projectService} from "../../../shared/project.service";
import {Project} from "../../project.model";
import {userService} from "../../../shared/user.service";
import {ServerService} from "../../../shared/server.service";

@Component({
  selector: 'app-live-project-edit',
  templateUrl: './live-project-edit.component.html',
  styleUrls: ['./live-project-edit.component.css']
})
export class LiveProjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  projectForm: FormGroup;

  constructor(private route: ActivatedRoute, private projectService: projectService
    , private router: Router, private userService: userService, private  serverService: ServerService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    let owner = '';
    let uniqueId;
    let moneyCollected = 0;
    let donations = [];
    let endDate = new Date();
    if (this.editMode) {
      owner = this.projectService.getProjectById(this.id).owner;
      uniqueId = this.projectService.getProjectById(this.id).uniqueId;
      moneyCollected = this.projectService.getProjectById(this.id).moneyCollected;
      donations = this.projectService.getProjectById(this.id).donations;
      endDate = this.projectService.getProjectById(this.id).endDate;
    } else {
      uniqueId = undefined;
      owner = this.userService.getUserName();
      moneyCollected = 0;
      endDate = undefined;
    }

    const newProject = new Project(uniqueId,
      this.projectForm.value['name'],
      this.projectForm.value['description'],
      this.projectForm.value['imagePath'],
      this.projectForm.value['daysLeft'],
      this.projectForm.value['hoursLeft'],
      this.projectForm.value['neededMoney'],
      this.projectForm.value['linkToExample'],
      owner,
      donations,
      moneyCollected,
      endDate,
      this.projectForm.value['videoPath']);
    if (this.editMode) {
      this.projectService.updateProject(this.id, newProject);
      this.serverService.updatePoject(newProject);
    } else {
      this.projectService.addProject(newProject);
      this.serverService.storeOneProject(newProject);
    }

    this.onCancel();
  }

  private initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    let daysLeft = '';
    let hoursLeft = '';
    let neededMoney = '';
    let linkToExample = '';
    let videoPath = '';
    if (this.editMode) {
      const project = this.projectService.getProjectById(this.id);
      name = project.name;
      description = project.description;
      imagePath = project.imagePath;
      daysLeft = project.daysLeft.toString();
      hoursLeft = project.hoursLeft.toString();
      neededMoney = project.neededMoney.toString();
      linkToExample = project.linkToExample;

    }
    this.projectForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imagePath),
      'daysLeft': new FormControl(daysLeft),
      'hoursLeft': new FormControl(hoursLeft, Validators.required),
      'neededMoney': new FormControl(neededMoney, Validators.required),
      'linkToExample': new FormControl(linkToExample),
      'videoPath': new FormControl(videoPath)
    })
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});

  }
}

