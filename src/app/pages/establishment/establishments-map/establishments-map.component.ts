import { Component, OnInit } from '@angular/core';
import { divIcon, latLng, LatLngBounds, Layer, Map, MapOptions, marker, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { EstablishmentRequestParams, EstablishmentService } from '@app/services/api/establishment.service';
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
    zoom: 10,
    center: latLng(this.kyivCoordinates.latitude, this.kyivCoordinates.longitude),
    zoomControl: true,
  } as MapOptions;

  markers: Layer[] = [];
  map: Map;

  constructor(private http: HttpClient,
              private establishmentService: EstablishmentService) {
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.initItems();
  }

  ngOnInit(): void {

  }

  private initItems(): void {
    const mapBounds: LatLngBounds = this.map.getBounds();
    const northEast: any = mapBounds.getNorthEast();
    const southWest: any = mapBounds.getSouthWest();

    const requestParams: EstablishmentRequestParams = {
      pageIndex: 0,
      pageSize: 100,
      minLatitude: southWest.lat,
      maxLatitude: northEast.lat,
      minLongitude: southWest.lng,
      maxLongitude: northEast.lng
    } as RequestParams;
    this.establishmentService.getAll$(requestParams).subscribe(
      response => {
        response.items.forEach(establishment => this.drawMarker(establishment));
      }
    );
  }

  onMapZoomEnd(): void {
    this.initItems();
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

  private addRisePopupOnHoverEvent(marker): void {
    marker.on('mouseover', function (e) {
    });

    marker.on('mouseout', function (e) {
      // this.closePopup();
    });
  }

}
