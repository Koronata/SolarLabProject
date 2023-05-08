import {Category} from "./category";

export class Advertisement {
  constructor(
    public id: string,
    public name: string,
    public description:string,
    public price: number,
    public imageURL: string,
    public address: string,
    public createdAt: Date,
    public category:Category,
    public isActive: boolean) {
  }
}
