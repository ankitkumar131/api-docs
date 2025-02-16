import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-design',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="container">
      <div class="header">
        <h1>API Design</h1>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          New API
        </button>
      </div>
      
      <div class="api-list">
        <mat-card *ngFor="let api of apis" class="api-card">
          <mat-card-header>
            <mat-card-title>{{ api.name }}</mat-card-title>
            <mat-card-subtitle>{{ api.version }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ api.description }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink]="[api.id]">
              <mat-icon>edit</mat-icon>
              Edit
            </button>
            <button mat-button color="primary">
              <mat-icon>visibility</mat-icon>
              Preview
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
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .api-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .api-card {
      margin-bottom: 16px;
    }
    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 8px;
    }
  `]
})
export class ApiDesignComponent {
  apis = [
    {
      id: 1,
      name: 'User Service API',
      version: 'v1.0.0',
      description: 'RESTful API for user management and authentication.'
    },
    {
      id: 2,
      name: 'Payment API',
      version: 'v2.1.0',
      description: 'Secure payment processing and transaction management API.'
    }
  ];
}
