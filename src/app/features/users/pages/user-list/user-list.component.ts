import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { User, UserRole, UserStatus } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <div class="header-content">
            <div>
              <mat-card-title>Users</mat-card-title>
              <mat-card-subtitle>Manage system users and their roles</mat-card-subtitle>
            </div>
            <button mat-raised-button color="primary" [routerLink]="['create']">
              <mat-icon>add</mat-icon>
              Add User
            </button>
          </div>
        </mat-card-header>

        <mat-card-content>
          <table mat-table [dataSource]="users" class="full-width">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Name</th>
              <td mat-cell *matCellDef="let user">{{user.name}}</td>
            </ng-container>

            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef>Email</th>
              <td mat-cell *matCellDef="let user">{{user.email}}</td>
            </ng-container>

            <ng-container matColumnDef="role">
              <th mat-header-cell *matHeaderCellDef>Role</th>
              <td mat-cell *matCellDef="let user">
                <mat-chip [class]="user.role.toLowerCase()">{{user.role}}</mat-chip>
              </td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let user">
                <mat-chip [class]="user.status.toLowerCase()">{{user.status}}</mat-chip>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let user">
                <button mat-icon-button [routerLink]="[user.id]" matTooltip="View Details">
                  <mat-icon>visibility</mat-icon>
                </button>
                <button mat-icon-button [routerLink]="[user.id, 'edit']" matTooltip="Edit">
                  <mat-icon>edit</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
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

    .full-width {
      width: 100%;
    }

    .mat-column-actions {
      width: 100px;
      text-align: right;
    }

    mat-chip {
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
  `]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['name', 'email', 'role', 'status', 'actions'];

  ngOnInit(): void {
    // TODO: Replace with actual API call
    this.users = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: UserRole.ADMIN,
        status: UserStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: UserRole.API_MANAGER,
        status: UserStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }
}
