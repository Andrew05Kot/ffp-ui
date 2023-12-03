import { MemoizedSelector } from '@ngrx/store';

export interface Selectors {
  selectAll: MemoizedSelector<any, any>;
  selectTotal: MemoizedSelector<any, any>;
  selectItemLoading: MemoizedSelector<object, boolean, any>;
  selectItemsError: MemoizedSelector<object, boolean, any>;
}
