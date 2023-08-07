import { ChangeDetectorRef, Component } from '@angular/core';
import { divIcon, latLng, LatLngBounds, Layer, Map, MapOptions, marker, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { Establishment, RequestParams } from '@app/models/backend';

@Component({
  selector: 'app-establishments-map',
  templateUrl: './establishments-map.component.html',
  styleUrls: ['./establishments-map.component.scss']
})
export class EstablishmentsMapComponent {

  mapTemplateUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  kyivCoordinates = {latitude: 50.450001, longitude: 30.523333};

  options: MapOptions = {
    layers: [
      tileLayer(this.mapTemplateUrl,
        {maxZoom: 18, minZoom: 2, attribution: '...'}),
    ],
    zoom: 11,
    center: latLng(this.kyivCoordinates.latitude, this.kyivCoordinates.longitude),
    zoomControl: true,
  } as MapOptions;

  markers: Layer[] = [];
  map: Map;

  icon = divIcon({
    iconSize: [30, 30],
    html: '<div class=\'marker\'></div>',
    className: 'point-marker',
  });

  prevZoom: number;

  constructor(private http: HttpClient,
              private cdr: ChangeDetectorRef,
              private establishmentService: EstablishmentService) {
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.prevZoom = map.getZoom();
    this.initItems();

    map.on('zoomend', () => this.handleMapChange());
    map.on('moveend', () => this.initItems());
  }

  private handleMapChange(): void {
    const currentZoom = this.map.getZoom();
    if (currentZoom > this.prevZoom) {
      this.prevZoom = currentZoom;
      this.initItems();
    }
  }

  private initItems(): void {
    this.markers = [];
    const wrappedBounds = this.map.getBounds();
    const southWest = wrappedBounds.getSouthWest();
    const northEast = wrappedBounds.getNorthEast();

    const searchBounds = `latitude<=${northEast.lat},longitude<=${northEast.lng},latitude>=${southWest.lat},longitude>=${southWest.lng}`;

    const requestParams: RequestParams = {
      pageIndex: 0,
      pageSize: 100,
      search: searchBounds,
    } as RequestParams;
    this.establishmentService.getAll$(requestParams).subscribe(response => {
        response.items.forEach(establishment => this.drawMarker(establishment));
        this.cdr.detectChanges();
      }
    );
  }

  private drawMarker(establishment: Establishment): void {
    const newMarker = marker([establishment.latitude, establishment.longitude], {
      icon: this.icon,
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
  }

  private addRisePopupOnHoverEvent(marker): void {
    marker.on('mouseover', function (e) {
      this.openPopup();
    });

    marker.on('mouseout', function (e) {
      this.closePopup();
    });
  }

}
