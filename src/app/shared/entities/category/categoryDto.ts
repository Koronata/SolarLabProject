export class CategoryDto {
  constructor(
    public id: string,
    public name: string,
    public isActive: boolean,
    public createdAt: Date,
  ) {
  }
}
