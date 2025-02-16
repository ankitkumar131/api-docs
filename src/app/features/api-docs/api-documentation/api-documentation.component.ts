import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatButtonModule, MatIconModule],
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ api.name }} Documentation</h1>
        <div class="actions">
          <button mat-button>
            <mat-icon>cloud_download</mat-icon>
            Download
          </button>
          <button mat-raised-button color="primary">
            <mat-icon>edit</mat-icon>
            Edit
          </button>
        </div>
      </div>

      <mat-card>
        <mat-card-content>
          <div class="api-info">
            <p><strong>Version:</strong> {{ api.version }}</p>
            <p><strong>Base URL:</strong> {{ api.baseUrl }}</p>
            <p>{{ api.description }}</p>
          </div>

          <mat-tab-group>
            <mat-tab label="Endpoints">
              <div class="tab-content">
                <div *ngFor="let endpoint of api.endpoints" class="endpoint">
                  <h3>
                    <span [class]="'method ' + endpoint.method.toLowerCase()">
                      {{ endpoint.method }}
                    </span>
                    {{ endpoint.path }}
                  </h3>
                  <p>{{ endpoint.description }}</p>
                </div>
              </div>
            </mat-tab>
            <mat-tab label="Models">
              <div class="tab-content">
                <div *ngFor="let model of api.models" class="model">
                  <h3>{{ model.name }}</h3>
                  <p>{{ model.description }}</p>
                </div>
              </div>
            </mat-tab>
            <mat-tab label="Authentication">
              <div class="tab-content">
                <h3>Authentication Methods</h3>
                <p>{{ api.authentication }}</p>
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
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .api-info {
      margin-bottom: 20px;
    }
    .tab-content {
      padding: 20px 0;
    }
    .endpoint {
      margin-bottom: 20px;
    }
    .method {
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      font-weight: 500;
    }
    .get { background-color: #e3f2fd; color: #1565c0; }
    .post { background-color: #e8f5e9; color: #2e7d32; }
    .put { background-color: #fff3e0; color: #ef6c00; }
    .delete { background-color: #ffebee; color: #c62828; }
    .model {
      margin-bottom: 20px;
    }
  `]
})
export class ApiDocumentationComponent {
  api = {
    name: 'User Service API',
    version: '1.0.0',
    baseUrl: 'https://api.example.com/v1',
    description: 'RESTful API for user management and authentication.',
    authentication: 'Bearer token authentication is required for all endpoints.',
    endpoints: [
      {
        method: 'GET',
        path: '/users',
        description: 'Retrieve a list of users'
      },
      {
        method: 'POST',
        path: '/users',
        description: 'Create a new user'
      },
      {
        method: 'PUT',
        path: '/users/{id}',
        description: 'Update an existing user'
      },
      {
        method: 'DELETE',
        path: '/users/{id}',
        description: 'Delete a user'
      }
    ],
    models: [
      {
        name: 'User',
        description: 'Represents a user in the system'
      },
      {
        name: 'UserCredentials',
        description: 'User authentication credentials'
      }
    ]
  };
}
