import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../user.model";
import {userService} from "../../shared/user.service";
import {ServerService} from "../../shared/server.service";
import {ActivatedRoute, Router} from "@angular/router";
import {projectService} from "../../shared/project.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public listItems: Array<string> = ["Donate","Creator","Admin"];
  userForm: FormGroup;
  constructor(private route: ActivatedRoute , private projectService: projectService
    , private router: Router,private userService: userService,private serverService: ServerService) { }

  ngOnInit() {
    this.initForm();
  }
  onSignUp(){
    const newUser = new User(this.userForm.value['userName'],
      this.userForm.value['password'],
      this.userForm.value['type']);
      this.serverService.storeUser(newUser);
      this.userService.setUser(newUser);
      this.onCancel();
  }
  private initForm() {
    let userName = '';
    let password = '';
    let type = 'Donate';
    this.userForm = new FormGroup({
      'userName': new FormControl(userName,Validators.required),
      'password': new FormControl(password,Validators.required),
      'type': new FormControl(type,Validators.required)
    })
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }
}
