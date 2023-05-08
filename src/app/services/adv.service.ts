import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AdvertisementDto} from "../shared/entities/advertisement/advertisementDto";
import {AdvertisementShortDto} from "../shared/entities/advertisement/advertisementShortDto";
import {AdvertisementCreateDto} from "../shared/entities/advertisement/advertisementCreateDto";
import {AdvertisementUpdateDto} from "../shared/entities/advertisement/advertisementUpdateDto";



@Injectable({
  providedIn: 'root'
})
export class AdvService {

  constructor(private http: HttpClient) {
  }

  public getAdvList(): Observable<AdvertisementShortDto[]> {
    return this.http.get('http://90.156.209.122:5000/Advert').pipe(map((data: any) => {
      return data.map(function (advertisementShortDto: AdvertisementShortDto): AdvertisementShortDto {
        return new AdvertisementShortDto(advertisementShortDto.id, advertisementShortDto.name, advertisementShortDto.price, advertisementShortDto.imageURL, advertisementShortDto.address, advertisementShortDto.createdAt, advertisementShortDto.isActive);
      });
    }));
  }

  public getAdv(id: string): Observable<AdvertisementDto> {
    let url: string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.get(url).pipe(map((data: any) => {
      return data.map(function (advertisementDto: AdvertisementDto): AdvertisementDto {
        return new AdvertisementDto(advertisementDto.id, advertisementDto.name, advertisementDto.description, advertisementDto.price, advertisementDto.imageURL, advertisementDto.address, advertisementDto.createdAt, advertisementDto.categoryId, advertisementDto.isActive);
      });
    }));
  }

  public createAdv(advertisement: AdvertisementCreateDto) {
    const body = {
      name: advertisement.name,
      description: advertisement.description,
      category: advertisement.categoryId,
      price: advertisement.price,
      imageURL: advertisement.imageUrl,
      address: advertisement.address,
    };
    return this.http.post('http://90.156.209.122:5000/Advert', body)
  }

  public updateAdv(id: string, advertisement: AdvertisementUpdateDto) {
    const body = {
      name: advertisement.name,
      description: advertisement.description,
      price: advertisement.price,
      imageUrl: advertisement.imageUrl,
      categoryId: advertisement.categoryId
    };
    let url: string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.put(url, body)
  }

  public deleteAdv(id: string) {
    let url: string;
    url = 'http://90.156.209.122:5000/Advert/';
    url = url.concat(id);
    return this.http.delete(url);
  }
}
