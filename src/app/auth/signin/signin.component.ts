import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServerService} from "../../shared/server.service";
import {ActivatedRoute, Router} from "@angular/router";
import {projectService} from "../../shared/project.service";
import {userService} from "../../shared/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm: FormGroup;

  constructor(private route: ActivatedRoute , private projectService: projectService
    , private router: Router,private userService: userService,private serverService: ServerService) { }

  ngOnInit() {
    this.initForm();
  }

  onSignIn(){
    let resp = this.serverService.signInUser(this.userForm.value['userName'],this.userForm.value['password']);
    this.onCancel();
  }
  private initForm() {
    let userName = '';
    let password = '';
    this.userForm = new FormGroup({
      'userName': new FormControl(userName, Validators.required),
      'password': new FormControl(password, Validators.required)
    })
  }
    onCancel(){
      this.router.navigate(['../'],{relativeTo: this.route});
    }
}
