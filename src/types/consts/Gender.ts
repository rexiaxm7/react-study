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
  0: new Gender(0, '不明', 'https://icongr.am/octicons/alert.svg?size=16&color=currentColor'),
  1: new Gender(1, '男', 'https://icongr.am/octicons/star-fill.svg?size=16&color=currentColor'),
  2: new Gender(2, '女', 'https://icongr.am/octicons/ruby.svg?size=16&color=currentColor'),
  3: new Gender(3, 'その他', 'https://icongr.am/octicons/rocket.svg?size=16&color=currentColor'),
};
