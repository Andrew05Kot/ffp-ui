import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ordering, RequestParams } from '@app/models/backend';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GlobalState } from '@app/store/ordering/global.state';
import { DatePipe } from '@angular/common';
import { distinctUntilChanged } from 'rxjs/operators';
import { OrderingLoadAction } from '@app/store/ordering/ordering.action';
import {
  selectAllOrdering,
  selectOrderingError,
  selectOrderingLoading,
  selectOrderingTotal
} from '@app/store/ordering/ordering.selector';

@Component({
  selector: 'app-ordering-overview',
  templateUrl: './ordering-overview.component.html',
  styleUrls: ['./ordering-overview.component.scss']
})
export class OrderingOverviewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'cardNumber',
    'paymentMethod',
    'selectedCategories',
    'createdDate',
    'lastModifiedDate'
  ];

  dataSource: MatTableDataSource<Ordering>;
  orderingTotal: number;
  noData: Ordering[] = [<Ordering>{}];
  loading: boolean;
  error$: Observable<boolean>;
  filterSubject = new Subject<string>();
  defaultSort: Sort = {active: 'id', direction: 'asc'};

  private filter: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<GlobalState>,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllOrdering)).subscribe(Orderings => this.initializeData(Orderings));
    this.store.pipe(select(selectOrderingTotal)).subscribe(total => this.orderingTotal = total);
    this.subscription.add(this.store.pipe(
      select(selectOrderingLoading))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(selectOrderingError));
  }

  ngAfterViewInit(): void {
    this.loadOrderings();
    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    let sort$ = this.sort.sortChange.pipe(
      tap(() => (this.paginator.pageIndex = 0))
    );

    this.subscription.add(
      merge(filter$, sort$, this.paginator.page)
        .pipe(tap(() => this.loadOrderings()))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  retry(): void {
    this.loadOrderings();
  }

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd.MM.yyyy HH:mm');
    return formattedDate || '';
  }


  private loadOrderings(): void {
    this.store.dispatch(new OrderingLoadAction(
      <RequestParams>{
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active,
        search: this.filter.toLocaleLowerCase(),
      }
    ));
  }

  private initializeData(orderings: Ordering[]): void {
    this.dataSource = new MatTableDataSource(
      orderings?.length ? orderings : this.noData
    );
  }
}
