import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Advertisement} from "../shared/entities/advertisement";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdvService {
  advertisement:Advertisement| undefined;

  constructor(private http: HttpClient) { }

  public getAdvList():Observable<Advertisement[]> {
    return this.http.get('http://90.156.209.122:5000/Advert').pipe(map((data: any) => {
      return data.map(function (advertisement: any): Advertisement {
        return new Advertisement(advertisement.id, advertisement.name, advertisement.price, advertisement.imageURL, advertisement.address,advertisement.createdAt,advertisement.isActive);
      });
    }));
  }
}
