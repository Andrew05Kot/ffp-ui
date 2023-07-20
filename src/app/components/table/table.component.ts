import { AfterViewInit, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { RequestParams } from '@app/models/backend';
import { MemoizedSelector, select, Store } from '@ngrx/store';
import { GlobalState } from '@app/store/dish/global.state';
import { DatePipe } from '@angular/common';
import { DishLoadAction } from '@app/store/dish/dish.action';

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
  @Input() selectAll: MemoizedSelector<any, any>;
  @Input() selectTotal: MemoizedSelector<any, any>;
  @Input() actionName: string;
  @Input() selectItemLoading: MemoizedSelector<object, boolean, any>;
  @Input() selectItemsError: MemoizedSelector<object, boolean, any>;
  @Input() columnTemplateRefs: IColumnTemplateRef = {};

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

  constructor(private store: Store<GlobalState>,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.store.pipe(select(this.selectAll)).subscribe(dishes => this.initializeData(dishes));
    this.store.pipe(select(this.selectTotal)).subscribe(total => this.total = total);
    this.subscription.add(this.store.pipe(
      select(this.selectItemLoading))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(this.selectItemsError));
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

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd.MM.yyyy HH:mm');
    return formattedDate || '';
  }

  private loadItems(): void {
    this.store.dispatch(new DishLoadAction(
      <RequestParams>{
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active,
        search: this.search
      }
    ));
  }

  private initializeData(data: any[]): void {
    this.dataSource = new MatTableDataSource(
      data?.length ? data : this.noData
    );
  }

}
