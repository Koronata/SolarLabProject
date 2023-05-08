export class CategoryUpdate{
  constructor(
    public name:string,
    public parentId: string|null,
    public isActive:boolean
  ) {
  }
}
