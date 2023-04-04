import {Component, OnInit} from '@angular/core';
import {IAdvertisement} from "../../../interface/advertisement";
import {AdvertisementService} from "../../../data/advertisementService";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  advertisements: IAdvertisement[] = [];
  constructor(private _advertisementService: AdvertisementService) {
  }
  ngOnInit(): void {
    this.advertisements = this._advertisementService.getList();
  }

}
