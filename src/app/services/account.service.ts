import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountCreateDto} from "../shared/entities/account/accountCreateDto";
import {AccountLoginDto} from "../shared/entities/account/accountLoginDto";
import {LoginResultDto} from "../shared/entities/account/loginResultDto";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  accountRegister(account:AccountCreateDto){
    const body = {
      login: account.login,
      password: account.password,
      email: account.email,
    };
  return this.http.post('http://90.156.209.122:5000/Account/register', body)
  }

  accountLogin(account:AccountLoginDto){
    const body = {
      login: account.login,
      password: account.password,
    };
    return this.http.post('http://90.156.209.122:5000/Account/login', body)
  }

  accountLogout(loginResult:LoginResultDto){
    const body = {
      token: loginResult.token,
    };
    return this.http.post('http://90.156.209.122:5000/Account/logout', body)
  }

  accountGetUserInfo(loginResult:LoginResultDto){
    const body = {
      token: loginResult.token,
    };
    return this.http.post('http://90.156.209.122:5000/Account/register', body)
  }

}
