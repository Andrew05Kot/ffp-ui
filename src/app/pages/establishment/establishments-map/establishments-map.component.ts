import { Component, OnInit } from '@angular/core';
import { divIcon, latLng, Layer, MapOptions, marker, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { Establishment, RequestParams } from '@app/models/backend';

@Component({
  selector: 'app-establishments-map',
  templateUrl: './establishments-map.component.html',
  styleUrls: ['./establishments-map.component.scss']
})
export class EstablishmentsMapComponent implements OnInit {

  mapTemplateUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  kyivCoordinates = {latitude: 50.450001, longitude: 30.523333};

  options: MapOptions = {
    layers: [
      tileLayer(this.mapTemplateUrl,
        {maxZoom: 18, attribution: '...'}),
    ],
    zoom: 5,
    center: latLng(this.kyivCoordinates.latitude, this.kyivCoordinates.longitude),
    zoomControl: true,
  } as MapOptions;

  markers: Layer[] = [];

  constructor(private http: HttpClient,
              private establishmentService: EstablishmentService) {
  }

  ngOnInit(): void {
    this.initItems();
  }

  private initItems(): void {
    const requestParams = {
      pageIndex: 0,
      pageSize: 100
    } as RequestParams;
    this.establishmentService.getAll$(requestParams).subscribe(
      response => {
        response.items.forEach(establishment => this.drawMarker(establishment));
      }
    );
  }

  private drawMarker(establishment: Establishment): void {
    const icon = divIcon({
      iconSize: [30, 30],
      html: '<div class=\'marker\'></div>',
      className: 'point-marker',
    });

    const newMarker = marker([establishment.latitude, establishment.longitude], {
      icon: icon,
      draggable: false,
      autoPanSpeed: 20,
      riseOnHover: true,
      title: establishment.id.toString()
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

  private onZoomIn(): void {
    throw new Error('Method not implemented.');
  }

  private onZoomOut(): void {
    throw new Error('Method not implemented.');
  }

  private addRisePopupOnHoverEvent(marker): void {
    marker.on('mouseover', function (e) {
    });

    marker.on('mouseout', function (e) {
      // this.closePopup();
    });
  }

}
