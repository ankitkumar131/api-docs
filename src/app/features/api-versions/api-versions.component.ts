import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-versions',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, RouterModule],
  template: `
    <div class="container">
      <h1>API Versions</h1>
      
      <div class="versions-list">
        <mat-card *ngFor="let api of apis" class="version-card">
          <mat-card-header>
            <mat-card-title>{{ api.name }}</mat-card-title>
            <mat-card-subtitle>
              <mat-chip-set>
                <mat-chip [color]="api.status === 'Active' ? 'primary' : 'warn'" selected>
                  {{ api.status }}
                </mat-chip>
              </mat-chip-set>
            </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="version-info">
              <p><strong>Latest Version:</strong> {{ api.latestVersion }}</p>
              <p><strong>Release Date:</strong> {{ api.releaseDate }}</p>
              <p>{{ api.description }}</p>
            </div>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink]="[api.id]">
              <mat-icon>history</mat-icon>
              Version History
            </button>
            <button mat-button color="primary">
              <mat-icon>add</mat-icon>
              New Version
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
    .versions-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .version-card {
      margin-bottom: 16px;
    }
    .version-info {
      margin: 16px 0;
    }
    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      padding: 8px;
    }
  `]
})
export class ApiVersionsComponent {
  apis = [
    {
      id: 1,
      name: 'User Service API',
      latestVersion: 'v1.2.0',
      releaseDate: '2025-02-01',
      status: 'Active',
      description: 'Added support for social login and improved error handling.'
    },
    {
      id: 2,
      name: 'Payment API',
      latestVersion: 'v2.1.0',
      releaseDate: '2025-01-15',
      status: 'Deprecated',
      description: 'Legacy version with basic payment processing capabilities.'
    }
  ];
}
