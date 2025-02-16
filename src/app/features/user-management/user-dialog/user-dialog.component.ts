import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../user.service';
import { UserRole } from '../user-management.component';

@Component({
  selector: 'app-user-dialog',
  template: `
    <h2 mat-dialog-title>{{data.user ? 'Edit' : 'Add'}} User</h2>
    <mat-dialog-content>
      <form [formGroup]="userForm" class="user-form">
        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" placeholder="Enter name">
          <mat-error *ngIf="userForm.get('name')?.hasError('required')">
            Name is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" placeholder="Enter email">
          <mat-error *ngIf="userForm.get('email')?.hasError('required')">
            Email is required
          </mat-error>
          <mat-error *ngIf="userForm.get('email')?.hasError('email')">
            Please enter a valid email
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Role</mat-label>
          <mat-select formControlName="role">
            <mat-option value="Admin">Admin</mat-option>
            <mat-option value="Developer">Developer</mat-option>
            <mat-option value="Viewer">Viewer</mat-option>
          </mat-select>
          <mat-error *ngIf="userForm.get('role')?.hasError('required')">
            Role is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status">
            <mat-option value="Active">Active</mat-option>
            <mat-option value="Inactive">Inactive</mat-option>
          </mat-select>
          <mat-error *ngIf="userForm.get('status')?.hasError('required')">
            Status is required
          </mat-error>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" 
              [disabled]="!userForm.valid"
              (click)="onSubmit()">
        {{data.user ? 'Update' : 'Add'}}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .user-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 400px;
      padding: 16px 0;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user?: User }
  ) {
    this.userForm = this.fb.group({
      name: [data.user?.name || '', Validators.required],
      email: [data.user?.email || '', [Validators.required, Validators.email]],
      role: [data.user?.role || 'Viewer', Validators.required],
      status: [data.user?.status || 'Active', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      if (this.data.user) {
        // Update existing user
        this.dialogRef.close({
          ...this.data.user,
          ...userData
        });
      } else {
        // Create new user
        this.dialogRef.close(userData);
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
