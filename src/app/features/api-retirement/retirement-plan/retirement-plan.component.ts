import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-retirement-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatChipsModule
  ],
  template: `
    <div class="container">
      <div class="header">
        <h1>{{ api.name }} - Retirement Plan</h1>
        <div class="actions">
          <button mat-button color="warn">
            <mat-icon>warning</mat-icon>
            Expedite
          </button>
          <button mat-raised-button color="primary">
            <mat-icon>save</mat-icon>
            Save Changes
          </button>
        </div>
      </div>

      <mat-card>
        <mat-card-content>
          <div class="api-info">
            <p><strong>Current Version:</strong> {{ api.version }}</p>
            <p><strong>Planned Retirement:</strong> {{ api.retirementDate }}</p>
            <p><strong>Status:</strong>
              <mat-chip-set>
                <mat-chip color="primary" selected>{{ api.status }}</mat-chip>
              </mat-chip-set>
            </p>
          </div>

          <mat-stepper orientation="vertical">
            <mat-step *ngFor="let phase of api.phases" [completed]="phase.completed">
              <ng-template matStepLabel>{{ phase.name }}</ng-template>
              <div class="step-content">
                <p>{{ phase.description }}</p>
                <div class="tasks">
                  <h4>Tasks:</h4>
                  <ul>
                    <li *ngFor="let task of phase.tasks" [class.completed]="task.completed">
                      {{ task.name }}
                      <span *ngIf="task.completed" class="completion-date">
                        (Completed: {{ task.completionDate }})
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="step-actions">
                  <button mat-button *ngIf="!phase.completed">
                    <mat-icon>check</mat-icon>
                    Mark Complete
                  </button>
                </div>
              </div>
            </mat-step>
          </mat-stepper>
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
      margin-bottom: 24px;
    }
    .step-content {
      margin: 16px 0;
      padding: 0 16px;
    }
    .tasks {
      margin: 16px 0;
    }
    .tasks h4 {
      margin-bottom: 8px;
    }
    .tasks ul {
      list-style-type: none;
      padding: 0;
    }
    .tasks li {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }
    .completed {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: line-through;
    }
    .completion-date {
      margin-left: 8px;
      font-size: 0.9em;
      color: rgba(0, 0, 0, 0.6);
    }
    .step-actions {
      margin-top: 16px;
    }
  `]
})
export class RetirementPlanComponent {
  api = {
    name: 'Legacy Payment API v1',
    version: '1.0.0',
    status: 'In Progress',
    retirementDate: '2025-12-31',
    phases: [
      {
        name: 'Announcement Phase',
        description: 'Notify all stakeholders about the planned retirement.',
        completed: true,
        tasks: [
          {
            name: 'Send retirement announcement to all API consumers',
            completed: true,
            completionDate: '2025-01-15'
          },
          {
            name: 'Update API documentation with retirement notice',
            completed: true,
            completionDate: '2025-01-16'
          }
        ]
      },
      {
        name: 'Migration Support',
        description: 'Provide support for migrating to new API version.',
        completed: false,
        tasks: [
          {
            name: 'Create migration guide documentation',
            completed: true,
            completionDate: '2025-02-01'
          },
          {
            name: 'Schedule migration support sessions',
            completed: false
          }
        ]
      },
      {
        name: 'Deprecation',
        description: 'Begin gradual deprecation of API features.',
        completed: false,
        tasks: [
          {
            name: 'Add deprecation headers to API responses',
            completed: false
          },
          {
            name: 'Monitor API usage and contact active users',
            completed: false
          }
        ]
      },
      {
        name: 'Decommissioning',
        description: 'Final phase of API retirement.',
        completed: false,
        tasks: [
          {
            name: 'Disable API endpoints',
            completed: false
          },
          {
            name: 'Archive API documentation',
            completed: false
          },
          {
            name: 'Send final retirement notice',
            completed: false
          }
        ]
      }
    ]
  };
}
