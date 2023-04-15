import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  selectAllEstablishment,
  selectEstablishmentError,
  selectEstablishmentLoading,
  selectEstablishmentTotal
} from '@app/store/establishment/establishment.selector';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GlobalState } from '@app/store/establishment/global.state';
import { distinctUntilChanged } from 'rxjs/operators';
import { Establishment, RequestParams } from '@app/models/backend';
import { EstablishmentLoadAction } from '@app/store/establishment/establishment.action';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-establishment-overview',
  templateUrl: './establishment-overview.component.html',
  styleUrls: ['./establishment-overview.component.scss']
})
export class EstablishmentOverviewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'country',
    'city',
    'street',
    'houseNumber',
    'createdDate',
    'lastModifiedDate'
  ];
  dataSource: MatTableDataSource<Establishment>;
  establishmentTotal: number;
  noData: Establishment[] = [<Establishment>{}];
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
    this.store.pipe(select(selectAllEstablishment)).subscribe(establishments => this.initializeData(establishments));
    this.store.pipe(select(selectEstablishmentTotal)).subscribe(total => this.establishmentTotal = total);
    this.subscription.add(this.store.pipe(
      select(selectEstablishmentLoading))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(selectEstablishmentError));
  }

  ngAfterViewInit(): void {
    this.loadEstablishments();
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
        .pipe(tap(() => this.loadEstablishments()))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  retry(): void {
    this.loadEstablishments();
  }

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd.MM.yyyy HH:mm');
    return formattedDate || '';
  }

  private loadEstablishments(): void {
    this.store.dispatch(new EstablishmentLoadAction(
      <RequestParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active
      }
    ));
  }

  private initializeData(establishments: Establishment[]): void {
    this.dataSource = new MatTableDataSource(
      establishments?.length ? establishments : this.noData
    );
  }

}
