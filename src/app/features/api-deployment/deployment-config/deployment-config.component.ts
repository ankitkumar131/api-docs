import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deployment-config',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="container">
      <h1>Deployment Configuration</h1>
      <mat-card>
        <mat-card-content>
          <form [formGroup]="configForm" (ngSubmit)="onSubmit()">
            <mat-form-field class="full-width">
              <mat-label>Environment</mat-label>
              <mat-select formControlName="environment">
                <mat-option value="development">Development</mat-option>
                <mat-option value="staging">Staging</mat-option>
                <mat-option value="production">Production</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Version</mat-label>
              <input matInput formControlName="version" placeholder="1.0.0">
            </mat-form-field>

            <mat-form-field class="full-width">
              <mat-label>Base URL</mat-label>
              <input matInput formControlName="baseUrl" placeholder="https://api.example.com">
            </mat-form-field>

            <div class="button-container">
              <button mat-button type="button">Cancel</button>
              <button mat-raised-button color="primary" type="submit">Deploy</button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
    .button-container {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 16px;
    }
  `]
})
export class DeploymentConfigComponent {
  configForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.configForm = this.fb.group({
      environment: ['development', Validators.required],
      version: ['', Validators.required],
      baseUrl: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onSubmit() {
    if (this.configForm.valid) {
      console.log(this.configForm.value);
    }
  }
}
