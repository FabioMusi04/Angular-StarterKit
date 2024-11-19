import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.components';
import { provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './utils/store/state';
import { CustomPreloadingStrategy } from './utils/preloading/strategy';

bootstrapApplication(AppComponent,  {providers: [provideRouter(APP_ROUTES, withPreloading(CustomPreloadingStrategy)), provideStore(reducers),]})
  .catch((err) => console.error(err));
