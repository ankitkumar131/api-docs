import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-deployment',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="container">
      <h1>API Deployment</h1>
      <div class="deployment-list">
        <mat-card *ngFor="let api of apis" class="deployment-card">
          <mat-card-header>
            <mat-card-title>{{ api.name }}</mat-card-title>
            <mat-card-subtitle>{{ api.version }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Status: {{ api.status }}</p>
            <p>Environment: {{ api.environment }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink]="[api.id]">
              <mat-icon>settings</mat-icon>
              Configure
            </button>
            <button mat-button color="primary">
              <mat-icon>cloud_upload</mat-icon>
              Deploy
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
    .deployment-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .deployment-card {
      margin-bottom: 16px;
    }
    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 8px;
    }
  `]
})
export class ApiDeploymentComponent {
  apis = [
    { id: 1, name: 'User Service API', version: 'v1.0.0', status: 'Ready', environment: 'Development' },
    { id: 2, name: 'Payment API', version: 'v2.1.0', status: 'Deployed', environment: 'Production' },
  ];
}
