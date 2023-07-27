import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Action, select, Store } from '@ngrx/store';
import { GlobalState } from '@app/store/dish/global.state';
import { DatePipe } from '@angular/common';
import { Selectors } from '@app/models/frontend/selector';

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
  @Input() actionName: string;
  @Input() selectors: Selectors;
  @Input() columnTemplateRefs: IColumnTemplateRef = {};

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

  constructor(private store: Store<GlobalState>,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.store.pipe(select(this.selectors.selectAll)).subscribe(dishes => this.initializeData(dishes));
    this.store.pipe(select(this.selectors.selectTotal)).subscribe(total => this.total = total);
    this.subscription.add(this.store.pipe(
      select(this.selectors.selectItemLoading))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(this.selectors.selectItemsError));
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
    const actionInstance: Action = createInstance(this.actionName, {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      sortDirection: this.sort.direction,
      sortField: this.sort.active,
      search: this.search,
    });

    this.store.dispatch(actionInstance);
  }

  private initializeData(data: any[]): void {
    this.dataSource = new MatTableDataSource(
      data?.length ? data : this.noData
    );
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
