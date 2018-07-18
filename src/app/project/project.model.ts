import {s} from "@angular/core/src/render3";

export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public daysLeft: number;
  public hoursLeft: number;
  public neededMoney: number;
  public moneyCollected: number;
  public linkToExample: string;

  constructor(name: string,description: string,imagePath: string,daysLeft: number,hoursLeft: number,neededMoney: number,moneyCollected: number,linkToExample: string){
  this.name = name;
  this.description = description;
  this.imagePath = imagePath;
  this.daysLeft = daysLeft;
  this.hoursLeft = hoursLeft;
  this.neededMoney = neededMoney;
  this.moneyCollected = moneyCollected;
  this.linkToExample = linkToExample;
  }
  GetRecruitmentPercent(){
    return this.moneyCollected/this.neededMoney*100;
  }
}
