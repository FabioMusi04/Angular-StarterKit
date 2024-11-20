import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.components';
import { provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './utils/store/state';
import { CustomPreloadingStrategy } from './utils/preloading/strategy';
import { tokenInterceptor } from './utils/auth/tokeninterceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES, withPreloading(CustomPreloadingStrategy)), provideStore(reducers), provideHttpClient(withInterceptors([tokenInterceptor])), { provide: CustomPreloadingStrategy, useClass: CustomPreloadingStrategy }
  ]
})
  .catch((err) => console.error(err));
