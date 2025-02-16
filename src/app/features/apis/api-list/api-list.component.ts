import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

interface ApiItem {
  id: string;
  name: string;
  version: string;
  status: 'active' | 'inactive' | 'deprecated';
  type: 'REST' | 'GraphQL' | 'gRPC';
  lastUpdated: Date;
  requests: number;
}

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class ApiListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'version', 'type', 'status', 'requests', 'lastUpdated', 'actions'];
  dataSource: ApiItem[] = [
    {
      id: '1',
      name: 'User Service API',
      version: 'v1.0.0',
      status: 'active',
      type: 'REST',
      lastUpdated: new Date('2025-02-14'),
      requests: 150000
    },
    {
      id: '2',
      name: 'Payment Gateway',
      version: 'v2.1.0',
      status: 'active',
      type: 'REST',
      lastUpdated: new Date('2025-02-13'),
      requests: 75000
    },
    {
      id: '3',
      name: 'Analytics API',
      version: 'v1.5.0',
      status: 'deprecated',
      type: 'GraphQL',
      lastUpdated: new Date('2025-02-10'),
      requests: 25000
    }
  ];

  ngOnInit() {
    // In a real application, we would fetch the API list from a service
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'primary';
      case 'inactive':
        return 'warn';
      case 'deprecated':
        return 'accent';
      default:
        return '';
    }
  }

  formatRequests(requests: number): string {
    return requests >= 1000000
      ? `${(requests / 1000000).toFixed(1)}M`
      : requests >= 1000
      ? `${(requests / 1000).toFixed(1)}K`
      : requests.toString();
  }
}
