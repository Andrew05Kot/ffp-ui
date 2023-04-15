import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dish, RequestParams } from '@app/models/backend';
import { debounceTime, merge, Observable, Subject, Subscription, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { GlobalState } from '@app/store/dish/global.state';
import { DatePipe } from '@angular/common';
import { distinctUntilChanged } from 'rxjs/operators';
import { selectAllDishes, selectDishError, selectDishesTotal, selectDishLoading } from '@app/store/dish/dish.selector';
import { DishLoadAction } from '@app/store/dish/dish.action';

@Component({
  selector: 'app-dishes-overview',
  templateUrl: './dishes-overview.component.html',
  styleUrls: ['./dishes-overview.component.scss']
})
export class DishesOverviewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price'
  ];
  dataSource: MatTableDataSource<Dish>;
  dishesTotal: number;
  noData: Dish[] = [<Dish>{}];
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
    this.store.pipe(select(selectAllDishes)).subscribe(dishes => this.initializeData(dishes));
    this.store.pipe(select(selectDishesTotal)).subscribe(total => this.dishesTotal = total);
    this.subscription.add(this.store.pipe(
      select(selectDishLoading))
      .subscribe(loading => {
        if (loading) {
          this.dataSource = new MatTableDataSource(this.noData);
        }
        this.loading = loading;
      }));
    this.error$ = this.store.pipe(select(selectDishError));
  }

  ngAfterViewInit(): void {
    this.loadDishes();
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
        .pipe(tap(() => this.loadDishes()))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  retry(): void {
    this.loadDishes();
  }

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd.MM.yyyy HH:mm');
    return formattedDate || '';
  }

  private loadDishes(): void {
    this.store.dispatch(new DishLoadAction(
      <RequestParams>{
        filter: this.filter.toLocaleLowerCase(),
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        sortDirection: this.sort.direction,
        sortField: this.sort.active
      }
    ));
  }

  private initializeData(dishes: Dish[]): void {
    this.dataSource = new MatTableDataSource(
      dishes?.length ? dishes : this.noData
    );
  }

}
