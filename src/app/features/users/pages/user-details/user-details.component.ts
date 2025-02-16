import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { User, UserRole, UserStatus } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <div class="header-content">
            <div>
              <mat-card-title>{{user?.name || 'Loading...'}}</mat-card-title>
              <mat-card-subtitle>
                <mat-chip [class]="user?.role?.toLowerCase() || 'viewer'">
                  {{user?.role || 'N/A'}}
                </mat-chip>
                <mat-chip [class]="user?.status?.toLowerCase() || 'pending'">
                  {{user?.status || 'N/A'}}
                </mat-chip>
              </mat-card-subtitle>
            </div>
            <button mat-raised-button color="primary" [routerLink]="['edit']">
              <mat-icon>edit</mat-icon>
              Edit User
            </button>
          </div>
        </mat-card-header>

        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Overview">
              <div class="tab-content">
                <mat-list>
                  <mat-list-item>
                    <span matListItemTitle>Email</span>
                    <span matListItemLine>{{user?.email || 'N/A'}}</span>
                  </mat-list-item>

                  <mat-list-item>
                    <span matListItemTitle>Role</span>
                    <span matListItemLine>{{user?.role || 'N/A'}}</span>
                  </mat-list-item>

                  <mat-list-item>
                    <span matListItemTitle>Status</span>
                    <span matListItemLine>{{user?.status || 'N/A'}}</span>
                  </mat-list-item>

                  <mat-list-item>
                    <span matListItemTitle>Created</span>
                    <span matListItemLine>
                      {{(user?.createdAt | date:'medium') ?? 'N/A'}}
                    </span>
                  </mat-list-item>

                  <mat-list-item>
                    <span matListItemTitle>Last Updated</span>
                    <span matListItemLine>
                      {{(user?.updatedAt | date:'medium') ?? 'N/A'}}
                    </span>
                  </mat-list-item>
                </mat-list>
              </div>
            </mat-tab>

            <mat-tab label="Activity">
              <div class="tab-content">
                <p class="hint-text">User activity and audit logs will be displayed here.</p>
              </div>
            </mat-tab>

            <mat-tab label="Permissions">
              <div class="tab-content">
                <p class="hint-text">
                  Detailed permissions and access control settings will be displayed here.
                </p>
              </div>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }

    .tab-content {
      padding: 24px;
    }

    mat-chip {
      margin-right: 8px;

      &.admin {
        background-color: #7b1fa2;
        color: white;
      }

      &.api_manager {
        background-color: #1976d2;
        color: white;
      }

      &.developer {
        background-color: #388e3c;
        color: white;
      }

      &.viewer {
        background-color: #f57c00;
        color: white;
      }

      &.active {
        background-color: #43a047;
        color: white;
      }

      &.inactive {
        background-color: #e53935;
        color: white;
      }

      &.pending {
        background-color: #ffa726;
        color: white;
      }
    }

    .hint-text {
      color: #666;
      font-style: italic;
    }
  `]
})
export class UserDetailsComponent implements OnInit {
  user?: User;

  ngOnInit(): void {
    // TODO: Replace with actual API call
    this.user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
