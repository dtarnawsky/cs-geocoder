import { Injectable } from '@angular/core';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder';


@Injectable({
  providedIn: 'root'
})
export class CordovaGeocoderService {

  async getCountry(coords: any): Promise<boolean> {
    const res = await NativeGeocoder.reverseGeocode(coords.latitude, coords.longitude);
    if (res.length < 1) alert('There was an error with reverseGeocode');
    let countryCode = res[0].countryCode;
    if (countryCode && countryCode.trim() === "US") {
      return true;
    } else {
      return false;
    }
  }
}
