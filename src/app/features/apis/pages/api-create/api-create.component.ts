import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { APIStatus } from '../../../../core/models/api.model';

@Component({
  selector: 'app-api-create',
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
    MatIconModule
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Create New API</mat-card-title>
          <mat-card-subtitle>Define your API details</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
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
                {{ loading ? 'Creating...' : 'Create API' }}
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
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
  `]
})
export class ApiCreateComponent {
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

  onSubmit(): void {
    if (this.apiForm.valid) {
      this.loading = true;
      // TODO: Implement API creation
      console.log('Creating API:', this.apiForm.value);
    }
  }
}
