import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class DashboardComponent {
  // Sample dashboard data
  apiMetrics = {
    totalApis: 24,
    activeApis: 18,
    totalRequests: '1.2M',
    errorRate: '0.05%'
  };

  recentActivity = [
    { type: 'create', message: 'New API created: Payment Gateway', time: '2 hours ago' },
    { type: 'update', message: 'Updated User Service API', time: '4 hours ago' },
    { type: 'alert', message: 'High latency detected in Auth API', time: '6 hours ago' }
  ];
}
