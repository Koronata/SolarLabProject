export class AdvertisementDto {
  constructor(
    public id: string,
    public name: string|null,
    public description:string|null,
    public price: number|null,
    public imageURL: string|null,
    public address: string|null,
    public createdAt: Date,
    public categoryId:string,
    public isActive: boolean) {
  }
}
