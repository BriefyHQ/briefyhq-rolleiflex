import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdPaginatorModule } from '@angular/material';
import { MdSortModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { WidgetsModule } from '../widgets/widgets.module';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule,
    WidgetsModule
  ],
  exports: [
    TableComponent,
  ],
  declarations: [
    TableComponent,
  ]
})
export class DataTableModule { }
