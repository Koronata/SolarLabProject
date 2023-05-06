export class Category{
  constructor(
    public id: string,
    public parentID: string|null,
    public name: string,
    public isActive: boolean,
  )
  {}
}
