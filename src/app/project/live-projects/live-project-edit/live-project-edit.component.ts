import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {projectService} from "../../../shared/project.service";
import {Project} from "../../project.model";
import {userService} from "../../../shared/user.service";

@Component({
  selector: 'app-live-project-edit',
  templateUrl: './live-project-edit.component.html',
  styleUrls: ['./live-project-edit.component.css']
})
export class LiveProjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  projectForm: FormGroup;

  constructor(private route: ActivatedRoute , private projectService: projectService
              , private router: Router,private userService: userService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    const newProject = new Project(this.projectForm.value['name'],
      this.projectForm.value['description'],
      this.projectForm.value['imagePath'],
      this.projectForm.value['daysLeft'],
      this.projectForm.value['hoursLeft'],
      this.projectForm.value['neededMoney'],
      this.projectForm.value['linkToExample'],
      this.userService.getUserName());
    if (this.editMode){
      this.projectService.updateProject(this.id,newProject);
    } else {
      this.projectService.addProject(newProject);
    }
    this.onCancel();
  }

  private initForm(){
    let name = '';
    let description = '';
    let imagePath = '';
    let daysLeft = '';
    let hoursLeft = '';
    let neededMoney = '';
    let linkToExample = '';

    if (this.editMode){
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
      'name': new FormControl(name,Validators.required),
      'description': new FormControl(description,Validators.required),
      'imagePath': new FormControl(imagePath),
      'daysLeft': new FormControl(daysLeft),
      'hoursLeft': new FormControl(hoursLeft,Validators.required),
      'neededMoney': new FormControl(neededMoney,Validators.required),
      'linkToExample': new FormControl(linkToExample)
    })
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}

