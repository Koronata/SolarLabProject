
export class AdvertisementDto{
  constructor(
    public id: string,
    public name: string,
    public description:string,
    public price: number,
    public imageURL: string,
    public address: string,
    public createdAt: Date,
    public categoryId:string,
    public isActive: boolean) {
  }
}
