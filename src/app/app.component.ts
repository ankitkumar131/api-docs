import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule
  ],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{ title }}</span>
      <span class="toolbar-spacer"></span>
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>

    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav [mode]="(isHandset$ | async) ? 'over' : 'side'"
                   [opened]="!(isHandset$ | async)">
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
            <mat-icon>dashboard</mat-icon>
            <span>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/api-design" routerLinkActive="active">
            <mat-icon>code</mat-icon>
            <span>API Design</span>
          </a>
          <a mat-list-item routerLink="/api-docs" routerLinkActive="active">
            <mat-icon>description</mat-icon>
            <span>Documentation</span>
          </a>
          <a mat-list-item routerLink="/api-versions" routerLinkActive="active">
            <mat-icon>history</mat-icon>
            <span>Versions</span>
          </a>
          <a mat-list-item routerLink="/api-deployment" routerLinkActive="active">
            <mat-icon>cloud_upload</mat-icon>
            <span>Deployment</span>
          </a>
          <a mat-list-item routerLink="/api-retirement" routerLinkActive="active">
            <mat-icon>archive</mat-icon>
            <span>Retirement</span>
          </a>
          <mat-divider></mat-divider>
          <a mat-list-item routerLink="/settings" routerLinkActive="active">
            <mat-icon>settings</mat-icon>
            <span>Settings</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <mat-menu #userMenu="matMenu">
      <button mat-menu-item routerLink="/profile">
        <mat-icon>person</mat-icon>
        <span>Profile</span>
      </button>
      <button mat-menu-item (click)="logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    .toolbar-spacer {
      flex: 1 1 auto;
    }

    .sidenav-container {
      flex: 1;
      margin-top: 64px;
    }

    mat-sidenav {
      width: 250px;
    }

    .content {
      padding: 20px;
    }

    mat-nav-list {
      a {
        mat-icon {
          margin-right: 16px;
        }
      }
    }

    .active {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `]
})
export class AppComponent {
  title = 'API Management Platform';
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  logout() {
    // TODO: Implement logout functionality
    console.log('Logout clicked');
  }
}
