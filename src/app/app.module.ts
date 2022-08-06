import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './_modules/material/material.module';
import { AdminRouting } from "./admin/admin-routing.module";
import { NgxTranslateModule } from "./_modules/localization/localization.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AdminRouting,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        NgxTranslateModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
