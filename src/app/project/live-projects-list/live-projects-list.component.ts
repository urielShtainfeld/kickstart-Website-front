import { Component, OnInit } from '@angular/core';
import {Project} from "../project.model";

@Component({
  selector: 'app-live-projects-list',
  templateUrl: './live-projects-list.component.html',
  styleUrls: ['./live-projects-list.component.css']
})
export class LiveProjectsListComponent implements OnInit {
  liveProjects : Project[] =[new Project('a','b','https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fwww.askideas.com%2Fmedia%2F11%2FCat-Showing-Punches-Funny-Fight-Image.jpg&imgrefurl=https%3A%2F%2Fwww.askideas.com%2Fcat-showing-punches-funny-fight-image%2F&docid=y2naVTVW3nL7GM&tbnid=5ClvjD51Lv6aLM%3A&vet=10ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw..i&w=500&h=375&bih=635&biw=1366&q=funny%20fight&ved=0ahUKEwjcwf2xyqTcAhWEXCwKHWTNCIUQMwg1KAMwAw&iact=mrc&uact=8'
    ,10,1,100,45)];
  constructor() { }

  ngOnInit() {
  }

}
