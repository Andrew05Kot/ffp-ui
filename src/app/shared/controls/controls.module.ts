import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from "@app/shared/controls/input/input.module";
import { FormFieldModule } from "@app/shared/controls/form-field/form-field.module";
import { SelectModule } from "@app/shared/controls/select/select.module";
import { CheckboxesModule } from "@app/shared/controls/checkboxes/checkboxes.module";
import { RadiosModule } from "@app/shared/controls/radios/radios.module";
import { DateModule } from "@app/shared/controls/date/date.module";
import { DateRangeModule } from "@app/shared/controls/date-range/date-range.module";
import { AutocompleteModule } from "@app/shared/controls/autocomplete/autocomplete.module";
import { PasswordModule } from "@app/shared/controls/password/password.module";


@NgModule({
  declarations: [],
  imports: [
    AutocompleteModule,
    CheckboxesModule,
    CommonModule,
    DateModule,
    DateRangeModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    RadiosModule,
    SelectModule
  ],
  exports: [
    AutocompleteModule,
    CheckboxesModule,
    DateModule,
    DateRangeModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    RadiosModule,
    SelectModule
  ]
})
export class ControlsModule {
}
