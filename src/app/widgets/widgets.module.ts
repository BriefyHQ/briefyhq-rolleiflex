import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { RecordValueComponent } from './record-value/record-value.component';
import {
  BooleanValueComponent,
  CoordinatesValueComponent,
  CountryValueComponent,
  DateValueComponent,
  DateTimeValueComponent,
  DefaultValueComponent,
  DownloadValueComponent,
  HTMLValueComponent,
  IntegerValueComponent,
  JSONValueComponent,
  LinksValueComponent,
  LocalDateTimeValueComponent,
  LocalityValueComponent,
  PriceValueComponent,
  RelationValueComponent,
  RouteLinkValueComponent,
  SafeURLValueComponent,
  TextStyleValueComponent,
  TextValueComponent,
  URLValueComponent,
  ViewValueComponent
} from './record-value/types';
import { PricePipe } from './pipes/price.pipe';
import { CountryPipe } from './pipes/country.pipe';
import { LocalityPipe } from './pipes/locality.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecordValueComponent,
    BooleanValueComponent,
    CoordinatesValueComponent,
    CountryValueComponent,
    DateValueComponent,
    DateTimeValueComponent,
    DefaultValueComponent,
    DownloadValueComponent,
    HTMLValueComponent,
    IntegerValueComponent,
    JSONValueComponent,
    LinksValueComponent,
    LocalDateTimeValueComponent,
    LocalityValueComponent,
    PriceValueComponent,
    RelationValueComponent,
    RouteLinkValueComponent,
    SafeURLValueComponent,
    TextStyleValueComponent,
    TextValueComponent,
    URLValueComponent,
    ViewValueComponent,
    PricePipe,
    CountryPipe,
    LocalityPipe
  ],
  exports: [
    RecordValueComponent,
    PricePipe,
    CountryPipe,
    LocalityPipe
  ],
  entryComponents: [
    BooleanValueComponent,
    CoordinatesValueComponent,
    CountryValueComponent,
    DateValueComponent,
    DateTimeValueComponent,
    DefaultValueComponent,
    DownloadValueComponent,
    HTMLValueComponent,
    IntegerValueComponent,
    JSONValueComponent,
    LinksValueComponent,
    LocalDateTimeValueComponent,
    LocalityValueComponent,
    PriceValueComponent,
    RelationValueComponent,
    RouteLinkValueComponent,
    SafeURLValueComponent,
    TextStyleValueComponent,
    TextValueComponent,
    URLValueComponent,
    ViewValueComponent
  ],
})
export class WidgetsModule { }
