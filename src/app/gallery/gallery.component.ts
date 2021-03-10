import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';
import {DestinationService} from '../destination.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  destinations:Destination[];
  constructor(private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.destinations = this.destinationService.getDestinations();
  }

}
