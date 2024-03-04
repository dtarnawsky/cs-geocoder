import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getPosition(): Promise<Position> {
    const res = await Geolocation.getCurrentPosition();
    return res;
  }
}
