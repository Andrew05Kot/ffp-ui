import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

@NgModule({
  imports: [CommonModule,
    FeatherModule.pick(allIcons)
  ],
  exports: [IconComponent, FeatherModule],
  declarations: [IconComponent],
})
export class FfpIconModule {}
