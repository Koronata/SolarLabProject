export class AdvertisementUpdateDto{
  constructor(
    public name:string,
    public description:string,
    public categoryId:string,
    public imageUrl:string,
    public price:number
  ) {
  }

}
