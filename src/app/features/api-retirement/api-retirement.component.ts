import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-retirement',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, RouterModule],
  template: `
    <div class="container">
      <h1>API Retirement Planning</h1>
      
      <div class="retirement-list">
        <mat-card *ngFor="let api of apis" class="retirement-card">
          <mat-card-header>
            <mat-card-title>{{ api.name }}</mat-card-title>
            <mat-card-subtitle>
              <mat-chip-set>
                <mat-chip [color]="getStatusColor(api.status)" selected>
                  {{ api.status }}
                </mat-chip>
              </mat-chip-set>
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="retirement-info">
              <p><strong>Current Version:</strong> {{ api.version }}</p>
              <p><strong>Planned Retirement:</strong> {{ api.retirementDate }}</p>
              <p>{{ api.description }}</p>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink]="[api.id]">
              <mat-icon>timeline</mat-icon>
              View Plan
            </button>
            <button mat-button color="warn">
              <mat-icon>warning</mat-icon>
              Expedite
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    .retirement-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .retirement-card {
      margin-bottom: 16px;
    }
    .retirement-info {
      margin: 16px 0;
    }
    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 8px;
    }
  `]
})
export class ApiRetirementComponent {
  apis = [
    {
      id: 1,
      name: 'Legacy Payment API v1',
      version: '1.0.0',
      status: 'Scheduled',
      retirementDate: '2025-12-31',
      description: 'Legacy payment processing API scheduled for retirement.'
    },
    {
      id: 2,
      name: 'Old Auth Service',
      version: '2.1.0',
      status: 'In Progress',
      retirementDate: '2025-06-30',
      description: 'Authentication service being phased out in favor of new OAuth2 implementation.'
    }
  ];

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'primary';
      case 'in progress':
        return 'accent';
      case 'completed':
        return 'warn';
      default:
        return 'primary';
    }
  }
}
