export class AccountDto{
  constructor(
    public id:string,
    public login: string|null,
    public email:string|null,
    public isBlocked: boolean,
    public scheme: string
  ) {
  }
}
