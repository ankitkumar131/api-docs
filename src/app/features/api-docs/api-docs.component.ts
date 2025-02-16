import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="container">
      <h1>API Documentation</h1>
      
      <div class="docs-list">
        <mat-card *ngFor="let api of apis" class="doc-card">
          <mat-card-header>
            <mat-card-title>{{ api.name }}</mat-card-title>
            <mat-card-subtitle>Version {{ api.version }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ api.description }}</p>
            <p class="status">Status: {{ api.status }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink]="[api.id]">
              <mat-icon>description</mat-icon>
              View Docs
            </button>
            <button mat-button color="primary">
              <mat-icon>cloud_download</mat-icon>
              Download
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
    .docs-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .doc-card {
      margin-bottom: 16px;
    }
    .status {
      margin-top: 8px;
      font-weight: 500;
    }
    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 8px;
    }
  `]
})
export class ApiDocsComponent {
  apis = [
    {
      id: 1,
      name: 'User Service API',
      version: '1.0.0',
      description: 'Complete documentation for user management endpoints.',
      status: 'Published'
    },
    {
      id: 2,
      name: 'Payment API',
      version: '2.1.0',
      description: 'Documentation for payment processing and transactions.',
      status: 'Draft'
    }
  ];
}
