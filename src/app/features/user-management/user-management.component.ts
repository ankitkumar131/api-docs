import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { UserService, User } from './user.service';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

export type UserRole = 'Admin' | 'Developer' | 'Viewer';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule
  ]
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'lastActive', 'apiKeys', 'actions'];
  users: User[] = [];
  userCounts: { [key in UserRole]: Observable<number> } = {} as { [key in UserRole]: Observable<number> };

  roles: { name: UserRole; permissions: string[] }[] = [
    { name: 'Admin', permissions: ['Full Access', 'User Management', 'API Management'] },
    { name: 'Developer', permissions: ['API Management', 'Analytics View', 'Documentation Access'] },
    { name: 'Viewer', permissions: ['Read-only Access', 'Analytics View'] }
  ];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    // Initialize user counts for each role
    this.roles.forEach(role => {
      this.userCounts[role.name] = this.userService.getUserCount(role.name);
    });
  }

  getRoleColor(role: UserRole): string {
    switch (role) {
      case 'Admin':
        return 'primary';
      case 'Developer':
        return 'accent';
      case 'Viewer':
        return 'warn';
      default:
        return '';
    }
  }

  getStatusColor(status: string): string {
    return status === 'Active' ? 'primary' : 'warn';
  }

  addUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result);
      }
    });
  }

  editUser(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(result);
      }
    });
  }

  deleteUser(user: User) {
    // Implement user deletion with confirmation
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.userService.deleteUser(user.id);
    }
  }

  manageApiKeys(user: User) {
    // Implement API key management dialog
    console.log('Manage API keys for:', user);
  }

  updateUserRole(user: User, newRole: 'Admin' | 'Developer' | 'Viewer') {
    this.userService.updateUserRole(user.id, newRole);
  }

  updateUserStatus(user: User, newStatus: 'Active' | 'Inactive') {
    this.userService.updateUserStatus(user.id, newStatus);
  }
}
