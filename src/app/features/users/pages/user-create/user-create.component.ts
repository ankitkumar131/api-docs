import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRole } from '../../../../core/models/user.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-user-create',
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
          <mat-card-title>Create New User</mat-card-title>
          <mat-card-subtitle>Add a new user to the system</mat-card-subtitle>
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
              <mat-label>Password</mat-label>
              <input matInput type="password" formControlName="password" 
                     placeholder="Enter password">
              <mat-error *ngIf="userForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="userForm.get('password')?.hasError('minlength')">
                Password must be at least 8 characters long
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

            <div class="form-actions">
              <button mat-button type="button" routerLink="..">Cancel</button>
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="userForm.invalid || loading">
                {{ loading ? 'Creating...' : 'Create User' }}
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
export class UserCreateComponent {
  userForm: FormGroup;
  loading = false;
  UserRole = UserRole;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: [UserRole.VIEWER, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.loading = true;
      this.authService.register(this.userForm.value).subscribe({
        next: () => {
          this.snackBar.open('User created successfully', 'Close', {
            duration: 3000
          });
          this.router.navigate(['..'], { relativeTo: this.router.routerState.root });
        },
        error: (error) => {
          this.loading = false;
          this.snackBar.open(
            error.error?.message || 'Failed to create user. Please try again.',
            'Close',
            { duration: 5000 }
          );
        }
      });
    }
  }
}
