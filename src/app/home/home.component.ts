import { Component, OnInit } from '@angular/core';
import { Destination} from '../destination';
import {DestinationService} from '../destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destinations:Destination[];
  constructor(private destinationService:DestinationService) { }

  ngOnInit(): void {
    this.destinations = this.destinationService.getDestinations();
  }

}
