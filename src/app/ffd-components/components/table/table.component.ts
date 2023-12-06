import {
  AfterViewInit,
  Component,
  ContentChild, EventEmitter,
  Input,
  OnDestroy,
  OnInit, Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { RequestParams } from '@app/admin-panel/models/backend';
import { ApiService } from '@app/admin-panel/services/api/api.service';

export class IColumnTemplateRef {
  [columnName: string]: TemplateRef<any>;
}

@Component({
  selector: 'ffp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @Input() tableName: string;
  @Input() displayedColumns: string[];
  @Input() columnTemplateRefs: IColumnTemplateRef = {};
  @Input() service: ApiService;

  @Output() onDoubleClick: EventEmitter<any> = new EventEmitter<any>();

  @ContentChild('headerActions') headerActions: TemplateRef<any>;

  dataSource: MatTableDataSource<any>;
  total: number;
  noData: any[] = [<any>{}];
  loading: boolean;
  error$: Observable<boolean>;
  filterSubject = new Subject<string>();
  defaultSort: Sort = {active: 'id', direction: 'asc'};
  searchText: string = '';

  private searchDirection: string = '';
  private searchField: string = '';
  private search: string = '';
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadItems();
    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.searchText = '';
      })
    );

    let sort$ = this.sort.sortChange.pipe(
      tap(() => (this.paginator.pageIndex = 0))
    );

    this.subscription.add(
      merge(filter$, sort$, this.paginator.page)
        .pipe(tap(() => this.loadItems()))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  retry(): void {
    this.loadItems();
  }

  onSearchTyping(): void {
    this.paginator.pageIndex = 0;
    if (this.searchText == '') {
      this.search = '';
      this.loadItems();
      return;
    }
    this.searchField = 'text';
    this.searchDirection = ':';
    this.search = this.searchField + this.searchDirection + this.searchText;
    this.loadItems();
  }

  private loadItems(): void {
    this.service.getAll$(this.getRequestParams()).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.items);
      this.total = data.count;
    });
  }

  private getRequestParams(): RequestParams {
    return {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      sortDirection: this.sort.direction,
      sortField: this.sort.active,
      search: this.search,
    } as RequestParams;
  }

  private initializeData(data: any[]): void {
    this.dataSource = new MatTableDataSource(
      data?.length ? data : this.noData
    );
  }

  doubleClick(data): void {
    this.onDoubleClick.next(data);
  }

}

export function createInstance(className: string, ...args: any[]): any {
  // Check if the class exists in the global context
  if (typeof (window as any)[className] === 'function') {
    const ClassReference = (window as any)[className];
    return new ClassReference(...args);
  } else {
    throw new Error(`Class "${className}" not found.`);
  }
}
