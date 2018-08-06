import {Donate} from "./donate.model";
import { Guid } from "guid-typescript";

export class Project {
  public uniqueId: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public daysLeft: number;
  public hoursLeft: number;
  public neededMoney: number;
  public moneyCollected: number;
  public linkToExample: string;
  public status: string;
  public owner: string;
  public donations: Donate[] = [];
  public endDate: Date;
  public videoPath: string;

  constructor(uniqueId: string,name: string,description: string,imagePath: string,daysLeft: number,hoursLeft: number,neededMoney: number,
              linkToExample: string,owner: string,donations: Donate[], moneyCollected: number ,endDate: Date ,videoPath: string){
  if (uniqueId != undefined){
    this.uniqueId = uniqueId;
  } else {
    this.uniqueId = Guid.create().toString();
  }
  if (endDate != undefined){
    this.endDate = endDate;
  }else{
    this.endDate = new Date( new Date().getTime() + (1000 * 60 * 60 * (24*daysLeft)) + (1000 * 60 * 60 *hoursLeft));
  }
  this.name = name;
  this.description = description;
  this.imagePath = imagePath;
  this.daysLeft = daysLeft;
  this.hoursLeft = hoursLeft;
  this.neededMoney = neededMoney;
  this.moneyCollected = moneyCollected;
  this.linkToExample = linkToExample;
  this.status = 'live';
  this.owner = owner;
  this.donations = donations;
  this.videoPath = videoPath;
  }

  GetRecruitmentPercent(){
    return Math.round(this.moneyCollected/this.neededMoney*100);
  }

  addDonation(donation: Donate){
    this.moneyCollected += donation.amount;
    this.donations.push(donation);
  }

  checkIfKickedOut(){
    if(this.GetRecruitmentPercent() >= 100 ){
      this.status = 'kickedout';
      return true;
    } else {
      this.status = 'Archive';
      return false;
    }
  }

}
