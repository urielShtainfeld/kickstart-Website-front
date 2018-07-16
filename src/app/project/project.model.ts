
export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public daysLeft: number;
  public hoursLeft: number;
  public neededMoney: number;
  public moneyCollected: number;

  constructor(name: string,description: string,imagePath: string,daysLeft: number,hoursLeft: number,neededMoney: number,moneyCollected: number){
  this.name = name;
  this.description = description;
  this.imagePath = imagePath;
  this.daysLeft = daysLeft;
  this.hoursLeft = hoursLeft;
  this.neededMoney = neededMoney;
  this.moneyCollected = moneyCollected;
  }
  GetRecruitmentPercent(){
    return this.moneyCollected/this.neededMoney*100;
  }
}
