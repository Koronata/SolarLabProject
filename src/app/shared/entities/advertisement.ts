export class Advertisement{
  constructor(
    public id:string,
    public name:string,
    public price:number,
    public imageURL:string,
    public address:string,
    public createdAt:Date,
    public isActive:boolean) {
  }
}
