import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

export interface AppState {
  counter: number;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};



