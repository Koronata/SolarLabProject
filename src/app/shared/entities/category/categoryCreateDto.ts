export class CategoryCreateDto {
  constructor(
    public name:string,
    public parentId: string|null,
    public isActive:boolean
  ) {
  }
}
