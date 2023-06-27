import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      position: 'Developer'
    },
    {
      id: 2,
      firstName: 'Helen',
      lastName: 'Jackson',
      age: 39,
      position: 'Engineer'
    },
    {
      id: 3,
      firstName: 'Salma',
      lastName: 'Abdulaziz',
      age: 35,
      position: 'CNN correspondent'
    },
    {
      id: 4,
      firstName: 'Joshua',
      lastName: 'Harrison',
      age: 26,
      position: 'data analyst'
    },
    // Add more users as needed
  ];

  selectedUser: User | null = null;

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  editUser(user: User): void {
    this.selectedUser = user;
  }

  saveUser(editedUser: User): void {
    const index = this.users.findIndex(u => u.id === editedUser.id);
    if (index !== -1) {
      this.users[index] = editedUser;
      this.selectedUser = null; // Deselect the user after saving
    }
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(u => u.id !== user.id);
    this.selectedUser = null; // Deselect the user if deleted
  }

  addUser(newUser: User): void {
    newUser.id = this.users.length + 1;
    this.users.push(newUser);
  }


}
