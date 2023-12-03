import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoRoutingModule } from '@app/admin-panel/pages/demo/pages/material-demo/material-demo-routing.module';
import { MaterialDemoComponent } from './material-demo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    MaterialDemoComponent
  ],
  imports: [
    CommonModule,
    MaterialDemoRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MaterialDemoModule {
}
