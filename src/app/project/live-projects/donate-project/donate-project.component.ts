import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Donate} from "../../donate.model";
import {projectService} from "../../../shared/project.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {userService} from "../../../shared/user.service";
import {ServerService} from "../../../shared/server.service";

@Component({
  selector: 'app-donate-project',
  templateUrl: './donate-project.component.html',
  styleUrls: ['./donate-project.component.css']
})
export class DonateProjectComponent implements OnInit {
  donateForm: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute, private projectService: projectService
    , private router: Router, private userService: userService, private serverService: ServerService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );
  }

  private initForm() {
    let name = this.userService.getUserName();
    let amount = 0;
    this.donateForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, Validators.required)
    })
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDonate() {
    this.projectService.addDonation(new Donate(this.donateForm.value['name'], +this.donateForm.value['amount']), this.id);
    this.serverService.updatePoject(this.projectService.getProjectById(this.id));
    this.onCancel();
  }
}
