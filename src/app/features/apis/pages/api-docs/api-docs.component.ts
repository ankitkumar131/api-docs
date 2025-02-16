import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { API, APIEndpoint, APIStatus } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-docs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <div class="header-content">
            <div>
              <mat-card-title>{{api?.name}} Documentation</mat-card-title>
              <mat-card-subtitle>Version {{api?.version}}</mat-card-subtitle>
            </div>
            <button mat-raised-button color="primary" [routerLink]="['../edit']">
              <mat-icon>edit</mat-icon>
              Edit Documentation
            </button>
          </div>
        </mat-card-header>

        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Overview">
              <div class="tab-content">
                <section class="api-section">
                  <h2>Description</h2>
                  <p>{{api?.description}}</p>
                </section>

                <section class="api-section">
                  <h2>Base URL</h2>
                  <div class="base-url">{{api?.baseUrl}}</div>
                </section>
              </div>
            </mat-tab>

            <mat-tab label="Endpoints">
              <div class="tab-content">
                <section class="api-section" *ngFor="let endpoint of endpoints">
                  <mat-expansion-panel>
                    <mat-expansion-panel-header>
                      <mat-panel-title>
                        <span class="method" [class]="endpoint.method.toLowerCase()">
                          {{endpoint.method}}
                        </span>
                        {{endpoint.path}}
                      </mat-panel-title>
                      <mat-panel-description>
                        {{endpoint.description}}
                      </mat-panel-description>
                    </mat-expansion-panel-header>

                    <div class="endpoint-details">
                      <h3>Parameters</h3>
                      <div class="params-table" *ngIf="endpoint.parameters.length > 0">
                        <div class="param-row header">
                          <div>Name</div>
                          <div>Location</div>
                          <div>Type</div>
                          <div>Required</div>
                          <div>Description</div>
                        </div>
                        <div class="param-row" *ngFor="let param of endpoint.parameters">
                          <div>{{param.name}}</div>
                          <div>{{param.location}}</div>
                          <div>{{param.type}}</div>
                          <div>
                            <mat-icon [class.required]="param.required">
                              {{param.required ? 'check_circle' : 'cancel'}}
                            </mat-icon>
                          </div>
                          <div>{{param.description}}</div>
                        </div>
                      </div>
                      <div class="empty-state" *ngIf="endpoint.parameters.length === 0">
                        No parameters required
                      </div>

                      <h3>Responses</h3>
                      <div class="responses" *ngFor="let response of endpoint.responses">
                        <div class="response-header">
                          <span class="status-code">{{response.statusCode}}</span>
                          <span class="response-description">{{response.description}}</span>
                        </div>
                        <div class="schema-name" *ngIf="response.schema">
                          Schema: {{response.schema}}
                        </div>
                      </div>
                    </div>
                  </mat-expansion-panel>
                </section>
              </div>
            </mat-tab>

            <mat-tab label="Schemas">
              <div class="tab-content">
                <section class="api-section" *ngFor="let schema of api?.documentation?.schemas">
                  <mat-expansion-panel>
                    <mat-expansion-panel-header>
                      <mat-panel-title>
                        {{schema.name}}
                      </mat-panel-title>
                      <mat-panel-description>
                        {{schema.type}}
                      </mat-panel-description>
                    </mat-expansion-panel-header>

                    <div class="schema-properties">
                      <div class="property-row header">
                        <div>Property</div>
                        <div>Type</div>
                        <div>Required</div>
                        <div>Description</div>
                      </div>
                      <div class="property-row" *ngFor="let prop of objectKeys(schema.properties)">
                        <div>{{prop}}</div>
                        <div>{{schema.properties[prop].type}}</div>
                        <div>
                          <mat-icon [class.required]="schema.properties[prop].required">
                            {{schema.properties[prop].required ? 'check_circle' : 'cancel'}}
                          </mat-icon>
                        </div>
                        <div>{{schema.properties[prop].description}}</div>
                      </div>
                    </div>
                  </mat-expansion-panel>
                </section>
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

    .tab-content {
      padding: 24px;
    }

    .api-section {
      margin-bottom: 32px;
    }

    .base-url {
      background-color: #f5f5f5;
      padding: 12px;
      border-radius: 4px;
      font-family: monospace;
    }

    .method {
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 500;
      margin-right: 12px;
      font-size: 14px;
    }

    .get {
      background-color: #e3f2fd;
      color: #1565c0;
    }

    .post {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    .put {
      background-color: #fff3e0;
      color: #ef6c00;
    }

    .delete {
      background-color: #ffebee;
      color: #c62828;
    }

    .patch {
      background-color: #f3e5f5;
      color: #6a1b9a;
    }

    .endpoint-details {
      padding: 16px 0;
    }

    .params-table, .schema-properties {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin: 16px 0;
    }

    .param-row, .property-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 100px 2fr;
      padding: 12px;
      border-bottom: 1px solid #e0e0e0;

      &:last-child {
        border-bottom: none;
      }

      &.header {
        background-color: #f5f5f5;
        font-weight: 500;
      }
    }

    .response-header {
      display: flex;
      align-items: center;
      margin: 16px 0 8px;
    }

    .status-code {
      background-color: #f5f5f5;
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 12px;
      font-family: monospace;
    }

    .schema-name {
      color: #666;
      font-style: italic;
    }

    .empty-state {
      color: #666;
      font-style: italic;
      padding: 16px 0;
    }

    .required {
      color: #2e7d32;
    }
  `]
})
export class ApiDocsComponent implements OnInit {
  api?: API;
  endpoints: APIEndpoint[] = [];
  objectKeys = Object.keys;

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
        schemas: [
          {
            name: 'User',
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Unique identifier',
                required: true
              },
              email: {
                type: 'string',
                description: 'User email address',
                required: true
              },
              name: {
                type: 'string',
                description: 'Full name',
                required: true
              }
            }
          }
        ]
      },
      status: APIStatus.PUBLISHED,
      owner: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Sample endpoints
    this.endpoints = [
      {
        path: '/users',
        method: 'GET',
        description: 'List all users',
        parameters: [
          {
            name: 'page',
            type: 'integer',
            required: false,
            description: 'Page number for pagination',
            location: 'query'
          },
          {
            name: 'limit',
            type: 'integer',
            required: false,
            description: 'Number of items per page',
            location: 'query'
          }
        ],
        responses: [
          {
            statusCode: 200,
            description: 'List of users',
            schema: 'User[]'
          }
        ]
      },
      {
        path: '/users/{id}',
        method: 'GET',
        description: 'Get user by ID',
        parameters: [
          {
            name: 'id',
            type: 'string',
            required: true,
            description: 'User ID',
            location: 'path'
          }
        ],
        responses: [
          {
            statusCode: 200,
            description: 'User details',
            schema: 'User'
          },
          {
            statusCode: 404,
            description: 'User not found',
            schema: 'Error'
          }
        ]
      }
    ];
  }
}
