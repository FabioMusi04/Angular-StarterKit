import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const selectCounterState = (state: AppState) => state.counter;

export const selectCounter = createSelector(
  selectCounterState,
  (counter: number) => counter
);
