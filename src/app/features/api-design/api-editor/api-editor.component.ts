import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-editor',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <h1>API Editor</h1>
        <div class="actions">
          <button mat-button>
            <mat-icon>preview</mat-icon>
            Preview
          </button>
          <button mat-raised-button color="primary">
            <mat-icon>save</mat-icon>
            Save
          </button>
        </div>
      </div>

      <mat-card>
        <mat-card-content>
          <form [formGroup]="apiForm">
            <mat-form-field class="full-width">
              <mat-label>API Name</mat-label>
              <input matInput formControlName="name" placeholder="User Service API">
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Version</mat-label>
              <input matInput formControlName="version" placeholder="1.0.0">
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Description</mat-label>
              <textarea matInput formControlName="description" rows="3"></textarea>
            </mat-form-field>
          </form>

          <mat-tab-group>
            <mat-tab label="Endpoints">
              <div class="tab-content">
                <p>Endpoint configuration coming soon...</p>
              </div>
            </mat-tab>
            <mat-tab label="Models">
              <div class="tab-content">
                <p>Data models configuration coming soon...</p>
              </div>
            </mat-tab>
            <mat-tab label="Security">
              <div class="tab-content">
                <p>Security configuration coming soon...</p>
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
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    .tab-content {
      padding: 20px 0;
    }
  `]
})
export class ApiEditorComponent {
  apiForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.apiForm = this.fb.group({
      name: ['', Validators.required],
      version: ['', Validators.required],
      description: ['']
    });
  }
}
