import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }

    const requiredRoles = route.data['roles'] as UserRole[];
    if (requiredRoles && this.authService.currentUser) {
      const userRole = this.authService.currentUser.role;
      if (!requiredRoles.includes(userRole)) {
        this.router.navigate(['/dashboard']);
        return false;
      }
    }

    return true;
  }
}
