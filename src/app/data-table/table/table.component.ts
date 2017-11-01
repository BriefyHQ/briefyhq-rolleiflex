import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MdSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable'


class SimpleDataSource extends DataSource<any> {

  data: any[];

  constructor (data: any[]) {
    super();
    this.data = data;
  }

  connect(): Observable<any> {
    return Observable.of(this.data);
  }

  disconnect() {}
}


@Component({
  selector: 'brf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {

  displayedColumns: string[];
  colsCount: number;
  rowsCount: number;
  rows: SimpleDataSource;

  _currentPage = 1;

  @ViewChild(MdSort) _sort: MdSort;

  @Input() columns: any[];
  @Input() records: any[];
  @Input() rowsPerPage = 25;
  @Input() currentPage: number;
  @Input() totalRows: number;
  @Input() sortBy: string;
  @Input() sortDirection: string;
  @Input() messages: any;

  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() page: EventEmitter<any> = new EventEmitter();

  private processRows(records: any[]): any[] {
    const rows = [];
    if (records !== undefined) {
      for (const record of records) {
        rows.push(record);
      }
    }
    return rows;
  }

  get counterMessage(): string {
    const count = this.rowsCount;
    let suffix = 'items';
    if (count === 1) {
      suffix = 'item';
    }
    return `${count} ${suffix}`;
  }

  get emptyMessage(): string {
    const messages = this.messages;
    let emptyMessage = 'No data to display';
    if (messages && messages.hasOwnProperty('emptyMessage')) {
      emptyMessage = messages.emptyMessage;
    }
    return emptyMessage;
  }
  get displayPager(): boolean {
    let display = true;
    if ((this.currentPage === undefined) || (this.totalRows <= this.rowsPerPage)) {
      display = false;
    }
    return display;
  }


  onPage(event) {
    this.page.emit({page: event.pageIndex});
  }

  ngOnChanges() {
    this.displayedColumns = [];
    for (const column of this.columns) {
      this.displayedColumns.push(column.field);
    }
    const rows = this.processRows(this.records);
    this.rows = new SimpleDataSource(rows);
    this.rowsCount = rows.length;
    this.colsCount = this.columns.length;
    this._currentPage = this.currentPage + 1;
  }

  ngOnInit() {
    this._sort.mdSortChange.subscribe(
      (info) => {
        this.sort.emit(
          {field: info.active, direction: info.direction}
        );
      }
    );
  }

  ngOnDestroy() {
    this._sort.mdSortChange.unsubscribe();
  }

}
