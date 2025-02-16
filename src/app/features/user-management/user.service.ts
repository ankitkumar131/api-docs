import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from './user-management.component';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'Active' | 'Inactive';
  lastActive: Date;
  apiKeys: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: new Date('2025-02-15T08:30:00'),
      apiKeys: 3
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Developer',
      status: 'Active',
      lastActive: new Date('2025-02-14T15:45:00'),
      apiKeys: 2
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      role: 'Viewer',
      status: 'Inactive',
      lastActive: new Date('2025-02-10T11:20:00'),
      apiKeys: 1
    }
  ]);

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  getUsersByRole(role: UserRole): Observable<User[]> {
    return this.users.pipe(
      map(users => users.filter(user => user.role === role))
    );
  }

  getUserCount(role: UserRole): Observable<number> {
    return this.getUsersByRole(role).pipe(
      map(users => users.length)
    );
  }

  addUser(user: Omit<User, 'id'>): void {
    const newUser: User = {
      ...user,
      id: Math.random().toString(36).substr(2, 9)
    };
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, newUser]);
  }

  updateUser(updatedUser: User): void {
    const currentUsers = this.users.value;
    const index = currentUsers.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      currentUsers[index] = updatedUser;
      this.users.next([...currentUsers]);
    }
  }

  deleteUser(userId: string): void {
    const currentUsers = this.users.value;
    this.users.next(currentUsers.filter(user => user.id !== userId));
  }

  updateUserRole(userId: string, newRole: UserRole): void {
    const currentUsers = this.users.value;
    const userIndex = currentUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      currentUsers[userIndex] = {
        ...currentUsers[userIndex],
        role: newRole
      };
      this.users.next([...currentUsers]);
    }
  }

  updateUserStatus(userId: string, newStatus: 'Active' | 'Inactive'): void {
    const currentUsers = this.users.value;
    const userIndex = currentUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      currentUsers[userIndex] = {
        ...currentUsers[userIndex],
        status: newStatus,
        lastActive: newStatus === 'Active' ? new Date() : currentUsers[userIndex].lastActive
      };
      this.users.next([...currentUsers]);
    }
  }
}
