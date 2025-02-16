import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { API, APIStatus } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <div class="header-content">
            <div>
              <mat-card-title>{{api?.name || 'Loading...'}}</mat-card-title>
              <mat-card-subtitle>
                Version {{api?.version || 'N/A'}}
                <span class="status-badge" [class]="api?.status?.toLowerCase() || 'draft'">
                  {{api?.status || 'Draft'}}
                </span>
              </mat-card-subtitle>
            </div>
            <div class="header-actions">
              <button mat-raised-button color="primary" [routerLink]="['edit']">
                <mat-icon>edit</mat-icon>
                Edit API
              </button>
              <button mat-raised-button color="accent" [routerLink]="['docs']">
                <mat-icon>description</mat-icon>
                View Documentation
              </button>
            </div>
          </div>
        </mat-card-header>

        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Overview">
              <div class="tab-content">
                <h3>Description</h3>
                <p>{{api?.description || 'N/A'}}</p>

                <h3>Base URL</h3>
                <p class="base-url">{{api?.baseUrl || 'N/A'}}</p>

                <h3>Details</h3>
                <mat-list>
                  <mat-list-item>
                    <span matListItemTitle>Owner</span>
                    <span matListItemLine>{{api?.owner || 'N/A'}}</span>
                  </mat-list-item>
                  <mat-list-item>
                    <span matListItemTitle>Created</span>
                    <span matListItemLine>{{api?.createdAt | date:'medium'}}</span>
                  </mat-list-item>
                  <mat-list-item>
                    <span matListItemTitle>Last Updated</span>
                    <span matListItemLine>{{api?.updatedAt | date:'medium'}}</span>
                  </mat-list-item>
                </mat-list>
              </div>
            </mat-tab>

            <mat-tab label="Endpoints">
              <div class="tab-content">
                <div *ngIf="api?.documentation?.endpoints?.length === 0" class="empty-state">
                  <mat-icon>api</mat-icon>
                  <p>No endpoints defined yet</p>
                  <button mat-raised-button color="primary" [routerLink]="['edit']">
                    Add Endpoints
                  </button>
                </div>

                <div *ngFor="let endpoint of api?.documentation?.endpoints">
                  <h3>{{endpoint.path}}</h3>
                  <p>{{endpoint.description}}</p>
                  <!-- Add more endpoint details as needed -->
                </div>
              </div>
            </mat-tab>

            <mat-tab label="Schemas">
              <div class="tab-content">
                <div *ngIf="api?.documentation?.schemas?.length === 0" class="empty-state">
                  <mat-icon>schema</mat-icon>
                  <p>No schemas defined yet</p>
                  <button mat-raised-button color="primary" [routerLink]="['edit']">
                    Add Schemas
                  </button>
                </div>

                <div *ngFor="let schema of api?.documentation?.schemas">
                  <h3>{{schema.name}}</h3>
                  <p>Type: {{schema.type}}</p>
                  <!-- Add more schema details as needed -->
                </div>
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

    .header-actions {
      display: flex;
      gap: 12px;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      margin-left: 12px;
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

    .tab-content {
      padding: 24px;
    }

    .base-url {
      background-color: #f5f5f5;
      padding: 12px;
      border-radius: 4px;
      font-family: monospace;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 0;
      color: #666;

      mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
      }
    }
  `]
})
export class ApiDetailsComponent implements OnInit {
  api?: API;

  ngOnInit(): void {
    // TODO: Replace with actual API call
    this.api = {
      id: '1',
      name: 'User Service API',
      version: '1.0.0',
      description: 'Comprehensive API for user management including authentication, authorization, and profile management.',
      baseUrl: 'https://api.example.com/users',
      documentation: {
        endpoints: [],
        schemas: []
      },
      status: APIStatus.PUBLISHED,
      owner: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
