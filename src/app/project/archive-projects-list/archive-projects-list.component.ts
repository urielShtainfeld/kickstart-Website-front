import { Component, OnInit } from '@angular/core';
import {Project} from "../project.model";

@Component({
  selector: 'app-archive-projects-list',
  templateUrl: './archive-projects-list.component.html',
  styleUrls: ['./archive-projects-list.component.css']
})
export class ArchiveProjectsListComponent implements OnInit {
  ArchiveProjects: Project[] = [new Project('a','b','https://www.google.co.il/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBtJu1yqTcAhXLkiwKHcpzDXQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK3yyIzxOJ7c&psig=AOvVaw0W1MCpVRpMD9qDwnKYXGYC&ust=1531863506018086'
    ,10,1,1,0.3)];
  constructor() { }

  ngOnInit() {
  }

}
