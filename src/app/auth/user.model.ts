export class User {
  public username: string;
  public password: string;
  public usertype: string;
  constructor(name: string,password: string,usertype: string) {

    this.username = name;
    this.password = password;
    this.usertype = usertype;
  }

}
