import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { GeolocationService } from '../geolocation.service';
import { CordovaGeocoderService } from '../cordova-geocoder.service';
import { CapacitorGeocoderService } from '../capacitor-geocoder.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private geo: GeolocationService,
    private cordovaGeoCoder: CordovaGeocoderService,
    private capacitorGeoCoder: CapacitorGeocoderService) {}

  async isUSCordova(): Promise<boolean> {
    const position = await this.geo.getPosition();
    const us = await this.cordovaGeoCoder.getCountry({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    alert(us ? 'You are located in the US' : 'You are not located in the US');
    return us;
  }

  async isUSCapacitor(): Promise<boolean> {
    const position = await this.geo.getPosition();
    const us = await this.capacitorGeoCoder.getCountry({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    alert(us ? 'You are located in the US' : 'You are not located in the US');
    return us;
  }
}
