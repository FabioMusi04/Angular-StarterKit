import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.components';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './utils/store/state';

bootstrapApplication(AppComponent,  {providers: [provideRouter(APP_ROUTES), provideStore(reducers)]})
  .catch((err) => console.error(err));
