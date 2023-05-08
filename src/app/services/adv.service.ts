import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Advertisement} from "../shared/entities/advertisement";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AdvService {
  advertisement: Advertisement | undefined;

  constructor(private http: HttpClient) {
  }

  public getAdvList(): Observable<Advertisement[]> {
    return this.http.get('http://90.156.209.122:5000/Advert').pipe(map((data: any) => {
      return data.map(function (advertisement: Advertisement): Advertisement {
        return new Advertisement(advertisement.id, advertisement.name, advertisement.description,advertisement.price, advertisement.imageURL, advertisement.address, advertisement.createdAt,advertisement.category, advertisement.isActive);
      });
    }));
  }

  public getAdv(id: string): Observable<Advertisement> {
    let url: string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.get(url).pipe(map((data: any) => {
      return data.map(function (advertisement: Advertisement): Advertisement {
        return new Advertisement(advertisement.id, advertisement.name, advertisement.description,advertisement.price, advertisement.imageURL, advertisement.address, advertisement.createdAt,advertisement.category, advertisement.isActive);
      });
    }));
  }

  public createAdv(advertisement: Advertisement) {
    const body = {
      id: advertisement.id,
      name: advertisement.name,
      description:advertisement.description,
      price: advertisement.price,
      imageURL: advertisement.imageURL,
      address:advertisement.address,
      createdAt:advertisement.createdAt,
      isActive: advertisement.isActive
    };
    return this.http.post('http://90.156.209.122:5000/Advert',body)
  }

  public updateAdv(id:string,advertisement:Advertisement){
    const body = {
      name: advertisement.name,
      description:advertisement.description,
      price: advertisement.price,
      imageURL: advertisement.imageURL,
      address:advertisement.address,
      createdAt:advertisement.createdAt,
      isActive: advertisement.isActive
    };
    let url:string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.put(url,body)
  }

  public deleteAdv(id:string){
    let url: string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.delete(url);
  }
}
