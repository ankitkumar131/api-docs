import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-edit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Edit API</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <!-- API edit form will go here -->
        <p>API Edit Component Works!</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
    }
    mat-card {
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class ApiEditComponent {}
