import { Injectable } from '@angular/core';
import {Destination } from './destination';
import { DESTINATIONS } from './mock-dest';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor() { }
  getDestinations(){
    return (DESTINATIONS);
  }
}
