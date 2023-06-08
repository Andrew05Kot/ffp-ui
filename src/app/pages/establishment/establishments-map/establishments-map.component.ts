import { Component } from '@angular/core';
import { divIcon, latLng, Layer, MapOptions, marker, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { Establishment, RequestParams } from '@app/models/backend';

export class MapPoint<T> {

  constructor(public id?: number,
              public latitude?: number,
              public longitude?: number,
              public addressName?: string,
              public description?: string,
              public entity?: T,
  ) {
  }
}

@Component({
  selector: 'app-establishments-map',
  templateUrl: './establishments-map.component.html',
  styleUrls: ['./establishments-map.component.scss']
})
export class EstablishmentsMapComponent {

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
    ],
    zoom: 8,
    center: latLng(48.29149, 25.94034),
    zoomControl: true,
  } as MapOptions;

  markers: Layer[] = [];

  constructor(private http: HttpClient,
              private establishmentService: EstablishmentService) {
    const requestParams = {
      pageIndex: 0,
      pageSize: 10
    } as RequestParams;
    this.establishmentService.getAll$(requestParams).subscribe(
      response => {
        response.items.forEach(est => {
          this.geocodeAddress({
            id: est.id,
            addressName: est.city
          } as MapPoint<Establishment>);
        });
      }
    );
  }

  geocodeAddress(pointMarket: MapPoint<Establishment>): void {
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      pointMarket.addressName
    )}&format=json&limit=1`;

    this.http.get(geocodingUrl).subscribe((data: any[]) => {
      if (data.length > 0) {
        const result = data[0];
        const latitude = parseFloat(result.lat);
        const longitude = parseFloat(result.lon);
        pointMarket.latitude = latitude;
        pointMarket.longitude = longitude;

        this.drawMarker(pointMarket);
      }
    });
  }

  drawMarker(pointMarket: MapPoint<Establishment>): void {
    const icon = divIcon({
      iconSize: [30, 30],
      html: '<div class=\'marker\'></div>',
      className: 'point-marker',
    });

    const newMarker = marker([pointMarket.latitude, pointMarket.longitude], {
      icon: icon,
      draggable: false,
      autoPanSpeed: 20,
      riseOnHover: true,
      title: pointMarket.id.toString()
    });

    newMarker.on('click', this.onMarkerClick.bind(this));

    this.addRisePopupOnHoverEvent(newMarker);
    this.markers.push(newMarker);
  }

  private onMarkerClick($event: PointerEvent): void {
    console.log('$event >> ', $event.target['options']['title']);

    // const data = this.testData.find(item => item.id == $event.target['options']['title']);
    // this.dialog.open(InfoPopUpComponent, {
    //   width: '250px',
    //   data: data
    // });
  }

  private addRisePopupOnHoverEvent(marker): void {
    marker.on('mouseover', function (e) {
    });

    marker.on('mouseout', function (e) {
      // this.closePopup();
    });
  }

}
