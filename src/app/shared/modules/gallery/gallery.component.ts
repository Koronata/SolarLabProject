import { Component, OnInit } from '@angular/core';
import {AdvService} from "../../../services/adv.service";
import {AdvertisementDto} from "../../entities/advertisement/advertisementDto";
import {AdvertisementShortDto} from "../../entities/advertisement/advertisementShortDto";
;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  public advList:AdvertisementShortDto[] = [];
  constructor(private advService:AdvService) {
  }

  ngOnInit(){
    this.advService.getAdvList().subscribe((data: AdvertisementShortDto[]) => this.advList = data);
  }

}
