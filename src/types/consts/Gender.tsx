export class Gender {
  id: number;
  name: string;
  imageURL: string;

  constructor(_id: number, _name: string, _imageURL: string) {
    this.id = _id;
    this.name = _name;
    this.imageURL = _imageURL;
  }
}



export const GenderList:{ [key: number]: Gender} = {
  0: new Gender(0, '不明', ''),
  1: new Gender(1, '男', ''),
  2: new Gender(2, '女', ''),
  3: new Gender(3, 'その他', ''),
};
