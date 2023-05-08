export class AdvertisementShortDto {
  constructor(
    public id:string,
    public name:string|null,
    public price:number|null,
    public imageURL:string|null,
    public address: string|null,
    public createdAt:Date,
    public isActive:boolean
  ) {
  }
}
