import {Component, Input} from '@angular/core';
import {IAdvertisement} from "../interface/advertisement";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent {
  @Input() advertisement!: IAdvertisement

  isVisible = false;
}
