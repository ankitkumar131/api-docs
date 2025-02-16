import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { API, APIStatus } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Edit API</mat-card-title>
          <mat-card-subtitle>Update API details and documentation</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <mat-tab-group>
            <mat-tab label="Basic Information">
              <div class="tab-content">
                <form [formGroup]="apiForm" (ngSubmit)="onSubmit()">
                  <mat-form-field appearance="outline" class="full-width">
                    <mat-label>API Name</mat-label>
                    <input matInput formControlName="name" placeholder="Enter API name">
                    <mat-error *ngIf="apiForm.get('name')?.hasError('required')">
                      API name is required
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="full-width">
                    <mat-label>Version</mat-label>
                    <input matInput formControlName="version" placeholder="e.g., 1.0.0">
                    <mat-error *ngIf="apiForm.get('version')?.hasError('required')">
                      Version is required
                    </mat-error>
                    <mat-error *ngIf="apiForm.get('version')?.hasError('pattern')">
                      Version must follow semantic versioning (e.g., 1.0.0)
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="full-width">
                    <mat-label>Description</mat-label>
                    <textarea matInput formControlName="description" rows="4" 
                              placeholder="Enter API description"></textarea>
                    <mat-error *ngIf="apiForm.get('description')?.hasError('required')">
                      Description is required
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="full-width">
                    <mat-label>Base URL</mat-label>
                    <input matInput formControlName="baseUrl" placeholder="https://api.example.com">
                    <mat-error *ngIf="apiForm.get('baseUrl')?.hasError('required')">
                      Base URL is required
                    </mat-error>
                    <mat-error *ngIf="apiForm.get('baseUrl')?.hasError('pattern')">
                      Please enter a valid URL
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="outline" class="full-width">
                    <mat-label>Status</mat-label>
                    <mat-select formControlName="status">
                      <mat-option *ngFor="let status of apiStatuses" [value]="status">
                        {{status}}
                      </mat-option>
                    </mat-select>
                    <mat-error *ngIf="apiForm.get('status')?.hasError('required')">
                      Status is required
                    </mat-error>
                  </mat-form-field>

                  <div class="form-actions">
                    <button mat-button type="button" routerLink="..">Cancel</button>
                    <button mat-raised-button color="primary" type="submit" 
                            [disabled]="apiForm.invalid || loading">
                      {{ loading ? 'Saving...' : 'Save Changes' }}
                    </button>
                  </div>
                </form>
              </div>
            </mat-tab>

            <mat-tab label="Documentation">
              <div class="tab-content">
                <h3>API Documentation</h3>
                <p class="hint-text">
                  Add comprehensive documentation for your API including endpoints, 
                  request/response schemas, and examples.
                </p>
                <!-- TODO: Add documentation editor -->
              </div>
            </mat-tab>

            <mat-tab label="Access Control">
              <div class="tab-content">
                <h3>Access Control</h3>
                <p class="hint-text">
                  Manage who can access and modify this API.
                </p>
                <!-- TODO: Add access control settings -->
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

    .tab-content {
      padding: 24px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 20px;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 20px;
    }

    .hint-text {
      color: #666;
      font-style: italic;
    }
  `]
})
export class ApiEditComponent implements OnInit {
  apiForm: FormGroup;
  loading = false;
  apiStatuses = Object.values(APIStatus);

  constructor(private fb: FormBuilder) {
    this.apiForm = this.fb.group({
      name: ['', Validators.required],
      version: ['', [Validators.required, Validators.pattern(/^\d+\.\d+\.\d+$/)]],
      description: ['', Validators.required],
      baseUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      status: [APIStatus.DRAFT, Validators.required]
    });
  }

  ngOnInit(): void {
    // TODO: Replace with actual API call
    const api: API = {
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

    this.apiForm.patchValue({
      name: api.name,
      version: api.version,
      description: api.description,
      baseUrl: api.baseUrl,
      status: api.status
    });
  }

  onSubmit(): void {
    if (this.apiForm.valid) {
      this.loading = true;
      // TODO: Implement API update
      console.log('Updating API:', this.apiForm.value);
    }
  }
}
