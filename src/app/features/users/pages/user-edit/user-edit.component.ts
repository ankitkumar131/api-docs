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
import { User, UserRole, UserStatus } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-edit',
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
          <mat-card-title>Edit User</mat-card-title>
          <mat-card-subtitle>Update user details and permissions</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" placeholder="Enter full name">
              <mat-error *ngIf="userForm.get('name')?.hasError('required')">
                Name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" placeholder="Enter email address">
              <mat-error *ngIf="userForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="userForm.get('email')?.hasError('email')">
                Please enter a valid email address
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Role</mat-label>
              <mat-select formControlName="role">
                <mat-option [value]="UserRole.ADMIN">Admin</mat-option>
                <mat-option [value]="UserRole.API_MANAGER">API Manager</mat-option>
                <mat-option [value]="UserRole.DEVELOPER">Developer</mat-option>
                <mat-option [value]="UserRole.VIEWER">Viewer</mat-option>
              </mat-select>
              <mat-error *ngIf="userForm.get('role')?.hasError('required')">
                Role is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Status</mat-label>
              <mat-select formControlName="status">
                <mat-option [value]="UserStatus.ACTIVE">Active</mat-option>
                <mat-option [value]="UserStatus.INACTIVE">Inactive</mat-option>
                <mat-option [value]="UserStatus.PENDING">Pending</mat-option>
              </mat-select>
              <mat-error *ngIf="userForm.get('status')?.hasError('required')">
                Status is required
              </mat-error>
            </mat-form-field>

            <div class="form-actions">
              <button mat-button type="button" routerLink="..">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="userForm.invalid || loading">
                {{ loading ? 'Saving...' : 'Save Changes' }}
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
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  UserRole = UserRole;
  UserStatus = UserStatus;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // TODO: Replace with actual API call
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.loading = true;
      // TODO: Implement user update
      console.log('Updating user:', this.userForm.value);
    }
  }
}
