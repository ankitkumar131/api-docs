import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-version-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ api.name }} - Version History</h1>
        <button mat-raised-button color="primary">
          <mat-icon>add</mat-icon>
          New Version
        </button>
      </div>

      <mat-card>
        <mat-card-content>
          <div class="version-timeline">
            <div *ngFor="let version of api.versions; let last = last" class="version-item">
              <div class="version-header">
                <h3>Version {{ version.number }}</h3>
                <mat-chip-set>
                  <mat-chip [color]="version.status === 'Active' ? 'primary' : 'warn'" selected>
                    {{ version.status }}
                  </mat-chip>
                </mat-chip-set>
              </div>
              
              <div class="version-meta">
                <span><mat-icon>calendar_today</mat-icon> {{ version.releaseDate }}</span>
                <span><mat-icon>person</mat-icon> {{ version.author }}</span>
              </div>

              <div class="version-content">
                <h4>Changes</h4>
                <ul>
                  <li *ngFor="let change of version.changes">{{ change }}</li>
                </ul>
              </div>

              <div class="version-actions">
                <button mat-button>
                  <mat-icon>description</mat-icon>
                  View Docs
                </button>
                <button mat-button>
                  <mat-icon>compare_arrows</mat-icon>
                  Compare
                </button>
              </div>

              <mat-divider *ngIf="!last"></mat-divider>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
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
    .version-timeline {
      padding: 16px;
    }
    .version-item {
      margin-bottom: 24px;
      padding: 16px 0;
    }
    .version-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .version-meta {
      display: flex;
      gap: 16px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 16px;
    }
    .version-meta span {
      display: flex;
      align-items: center;
    }
    .version-meta mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    .version-content {
      margin: 16px 0;
    }
    .version-content h4 {
      margin-bottom: 8px;
    }
    .version-actions {
      display: flex;
      gap: 8px;
    }
  `]
})
export class VersionDetailsComponent {
  api = {
    name: 'User Service API',
    versions: [
      {
        number: '1.2.0',
        status: 'Active',
        releaseDate: '2025-02-01',
        author: 'John Doe',
        changes: [
          'Added social login integration',
          'Improved error handling and validation',
          'Updated user profile endpoints'
        ]
      },
      {
        number: '1.1.0',
        status: 'Deprecated',
        releaseDate: '2025-01-15',
        author: 'Jane Smith',
        changes: [
          'Added password reset functionality',
          'Enhanced security measures',
          'Bug fixes and performance improvements'
        ]
      },
      {
        number: '1.0.0',
        status: 'Deprecated',
        releaseDate: '2024-12-01',
        author: 'John Doe',
        changes: [
          'Initial release',
          'Basic user management functionality',
          'Authentication and authorization'
        ]
      }
    ]
  };
}
