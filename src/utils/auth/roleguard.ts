import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './authservice';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const user: any = this.authService.getCurrentUser();
    if (user && user.role === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
