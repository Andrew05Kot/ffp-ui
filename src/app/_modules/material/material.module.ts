import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule, MomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatTabsModule,
        MatBadgeModule,
        MatAutocompleteModule,
        DragDropModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MomentDateModule,
        MatMomentDateModule
    ],
    providers: [],
})
export class MaterialModule {
}
