import { Injectable } from '@angular/core';
import { NativeGeocoder, ReverseOptions } from '@capgo/nativegeocoder';

@Injectable({
  providedIn: 'root'
})
export class CapacitorGeocoderService {

  async getCountry(options: ReverseOptions): Promise<boolean> {
    const res = await NativeGeocoder.reverseGeocode(options);
    if (res.addresses.length < 1) alert('There was an error with reverseGeocode');    
    let countryCode = res.addresses[0].countryCode;
    if (countryCode && countryCode.trim() === "US") {
      return true;
    } else {
      return false;
    }
  }
}
