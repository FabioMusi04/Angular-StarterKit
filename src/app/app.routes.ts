import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/home/home-routing.module').then((m) => m.HomeRoutingModule),
    // canActivate: [AuthGuard],
    // data: { preload: true,  expectedRole: 'admin', }
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../pages/about/about-routing.module').then((m) => m.AboutRoutingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../pages/login/login-routing.module').then((m) => m.LoginRoutingModule),
  }
];

