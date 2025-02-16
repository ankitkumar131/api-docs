import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule
  ]
})
export class AnalyticsDashboardComponent implements OnInit {
  // Sample analytics data
  metrics = {
    totalRequests: '2.5M',
    avgResponseTime: '125ms',
    errorRate: '0.5%',
    activeUsers: '12.3K'
  };

  timeRanges = ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days'];
  selectedTimeRange = 'Last 7 Days';

  // Sample chart data
  requestsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'API Requests',
        data: [65000, 59000, 80000, 81000, 56000, 55000, 70000]
      }
    ]
  };

  responseTimeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Response Time (ms)',
        data: [120, 132, 125, 128, 122, 118, 125]
      }
    ]
  };

  topAPIs = [
    { name: 'User Service API', requests: '500K', avgResponseTime: '95ms' },
    { name: 'Payment Gateway', requests: '350K', avgResponseTime: '125ms' },
    { name: 'Analytics API', requests: '200K', avgResponseTime: '85ms' },
    { name: 'Authentication API', requests: '180K', avgResponseTime: '75ms' }
  ];

  errorDistribution = [
    { type: '4xx Errors', count: 2500, percentage: '60%' },
    { type: '5xx Errors', count: 1200, percentage: '30%' },
    { type: 'Network Errors', count: 400, percentage: '10%' }
  ];

  ngOnInit() {
    // In a real application, we would fetch analytics data from a service
    this.initializeCharts();
  }

  initializeCharts() {
    // Initialize charts using a charting library like Chart.js
    // This would be implemented with actual chart library integration
  }

  onTimeRangeChange(range: string) {
    this.selectedTimeRange = range;
    // In a real application, we would fetch new data based on the selected time range
  }
}
