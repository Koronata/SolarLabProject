import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IAdvertisementResponse } from '../interface/advertisement-response';
import { Observable } from 'rxjs';
import {IAdvertisement} from "../interface/advertisement";

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor() {}
  getList():any[]{
    return new Array(20).fill({
      id: 0,
      title: 'Гитара фендер',
      price: 20000,
      imgSrc: 'https://placehold.co/600x400',
      createdAt: 'Сегодня 14:12',
      address: 'Москва',
    })
  }
}


