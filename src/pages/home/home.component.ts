import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../utils/store/counter/counter.actions';
import { selectCounter } from '../../utils/store/counter/counter.selector'; // Import selector
import { CommonModule } from '@angular/common';
import { AppState } from '../../utils/store/state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCounter);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
