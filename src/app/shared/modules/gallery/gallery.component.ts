import { Component, OnInit } from '@angular/core';
import {AdvService} from "../../../services/adv.service";
import {Advertisement} from "../../entities/advertisement";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  advertisement: any;
  public advList:Advertisement[] = [];
  constructor(private advService:AdvService) {
  }

  ngOnInit(){
    this.advService.getAdvList().subscribe((data: Advertisement[]) => this.advList = data);
  }


}
