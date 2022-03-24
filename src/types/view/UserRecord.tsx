import { Gender, GenderList } from "./../consts/Gender";

export class UserRecord {
  id: string;
  mailAddress: string;
  gender: number;
  age: number;
  job: string[];
  hobby: string[];

  constructor() {
    this.id = "";
    this.mailAddress = "";
    this.gender = 0;
    this.age = -1;
    this.job = [];
    this.hobby = [];
  };

  public get genderName() : string {
    const info = this.genderInfo;
    if (info === null)
    {
      return GenderList[0].name
    }

    return info.name;
  };

  public get genderImageURL() : string {
    const info = this.genderInfo;
    if (info === null)
    {
      return GenderList[0].imageURL
    }

    return info.imageURL;
  };

  private get genderInfo() : Gender | null {
    if (this.gender in GenderList)
    {
      return GenderList[this.gender];
    }

    return null;
  };  
};
