export class AccountCreateDto{
  constructor(
    public login:string,
    public password:string,
    public email: string|null
  ) {
  }
}
