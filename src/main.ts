import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.components';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent,  {providers: [provideRouter(APP_ROUTES)]})
  .catch((err) => console.error(err));
