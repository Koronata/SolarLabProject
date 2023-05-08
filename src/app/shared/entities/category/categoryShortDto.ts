export class CategoryShortDto {
  constructor(
    public id: string,
    public parentId: string,
    public name: string|null,
    public isActive: boolean
  ) {
  }
}
