export class AdvertisementCreateDto{
  constructor(
    public name:string,
    public description:string|null,
    public categoryId:string,
    public imageUrl:string|null,
    public price: number|null,
    public address:string
  ) {
  }
}
