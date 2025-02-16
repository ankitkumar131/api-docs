import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { API, APIStatus } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>API Management</mat-card-title>
          <mat-card-subtitle>Manage your APIs and their documentation</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <div class="actions">
            <button mat-raised-button color="primary" routerLink="new">
              <mat-icon>add</mat-icon>
              Create New API
            </button>
          </div>

          <table mat-table [dataSource]="apis" class="mat-elevation-z2">
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Name</th>
              <td mat-cell *matCellDef="let api">{{api.name}}</td>
            </ng-container>

            <ng-container matColumnDef="version">
              <th mat-header-cell *matHeaderCellDef>Version</th>
              <td mat-cell *matCellDef="let api">{{api.version}}</td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let api">
                <span class="status-badge" [class]="api.status.toLowerCase()">
                  {{api.status}}
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let api">
                <button mat-icon-button [routerLink]="[api.id]" matTooltip="View Details">
                  <mat-icon>visibility</mat-icon>
                </button>
                <button mat-icon-button [routerLink]="[api.id, 'edit']" matTooltip="Edit API">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button [routerLink]="[api.id, 'docs']" matTooltip="View Documentation">
                  <mat-icon>description</mat-icon>
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

    .actions {
      margin-bottom: 20px;
    }

    table {
      width: 100%;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .draft {
      background-color: #e3f2fd;
      color: #1565c0;
    }

    .published {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    .deprecated {
      background-color: #fff3e0;
      color: #ef6c00;
    }

    .retired {
      background-color: #ffebee;
      color: #c62828;
    }
  `]
})
export class ApiListComponent implements OnInit {
  apis: API[] = [];
  displayedColumns: string[] = ['name', 'version', 'status', 'actions'];

  ngOnInit(): void {
    // TODO: Replace with actual API call
    this.apis = [
      {
        id: '1',
        name: 'User Service API',
        version: '1.0.0',
        description: 'API for user management',
        baseUrl: 'https://api.example.com/users',
        documentation: {
          endpoints: [],
          schemas: []
        },
        status: APIStatus.PUBLISHED,
        owner: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Payment API',
        version: '2.1.0',
        description: 'Payment processing API',
        baseUrl: 'https://api.example.com/payments',
        documentation: {
          endpoints: [],
          schemas: []
        },
        status: APIStatus.DRAFT,
        owner: 'Jane Smith',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }
}
