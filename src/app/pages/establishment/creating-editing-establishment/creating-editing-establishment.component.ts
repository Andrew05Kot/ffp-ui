import { ChangeDetectorRef, Component, inject, Injector } from '@angular/core';
import {
  EstablishmentForm
} from '@app/pages/establishment/creating-editing-establishment/form/establishment-form.class';
import { MatDialogRef } from '@angular/material/dialog';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { divIcon, latLng, Layer, Map, MapOptions, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-creating-editing-establishment',
  templateUrl: './creating-editing-establishment.component.html',
  styleUrls: ['./creating-editing-establishment.component.scss']
})
export class CreatingEditingEstablishmentComponent {

  action: 'create' | 'edit';

  mapTemplateUrl: string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  kyivCoordinates = {latitude: 50.450001, longitude: 30.523333};

  icon = divIcon({
    iconSize: [30, 30],
    html: '<div class=\'marker\'></div>',
    className: 'point-marker',
  });

  options: MapOptions = {
    layers: [
      tileLayer(this.mapTemplateUrl,
        {maxZoom: 18, minZoom: 2, attribution: '...'}),
    ],
    zoom: 11,
    center: latLng(this.kyivCoordinates.latitude, this.kyivCoordinates.longitude),
    zoomControl: true,
  } as MapOptions;

  map: Map;
  markers: Layer[] = [];

  public readonly form = new EstablishmentForm(
    inject(Injector)
  );

  constructor(private cdr: ChangeDetectorRef,
              private establishmentService: EstablishmentService,
              private dialogRef: MatDialogRef<CreatingEditingEstablishmentComponent>) {
  }

  onMapReady(map: Map): void {
    this.map = map;

    map.on('click', (e) => {
      const coord = e.latlng;
      this.drawMarker(coord.lat, coord.lng);
      this.form.get('latitude').patchValue(coord.lat);
      this.form.get('longitude').patchValue(coord.lng);
    });
  }

  private drawMarker(latitude: number, longitude: number): void {
    const newMarker = marker([latitude, longitude], {
      icon: this.icon,
      draggable: false,
      autoPanSpeed: 20,
      riseOnHover: true
    });

    this.markers = [newMarker];
    this.cdr.detectChanges();
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.establishmentService.create$(this.form.getRawValue()).subscribe(result =>
      this.dialogRef.close(true))
  }
}
