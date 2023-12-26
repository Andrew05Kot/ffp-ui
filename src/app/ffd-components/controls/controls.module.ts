import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from "@app/ffd-components/controls/input/input.module";
import { FormFieldModule } from "@app/ffd-components/controls/form-field/form-field.module";
import { SelectModule } from "@app/ffd-components/controls/select/select.module";
import { CheckboxesModule } from "@app/ffd-components/controls/checkboxes/checkboxes.module";
import { RadiosModule } from "@app/ffd-components/controls/radios/radios.module";
import { DateModule } from "@app/ffd-components/controls/date/date.module";
import { DateRangeModule } from "@app/ffd-components/controls/date-range/date-range.module";
import { AutocompleteModule } from "@app/ffd-components/controls/autocomplete/autocomplete.module";
import { PasswordModule } from "@app/ffd-components/controls/password/password.module";


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
