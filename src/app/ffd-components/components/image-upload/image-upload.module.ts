import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  exports: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxFileDropModule,
    MatButtonModule
  ]
})
export class ImageUploadModule { }
