import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  newUser: User = {
    id: this.generateUserId(),
    firstName: '',
    lastName: '',
    age: 0,
    position: ''
  };

  @Output() addUser = new EventEmitter<User>();

  saveUser(): void {
    this.addUser.emit(this.newUser);
    this.resetForm();
  }

  resetForm(): void {
    this.newUser = {
      id: this.generateUserId(),
      firstName: '',
      lastName: '',
      age: 0,
      position: ''
    };
  }

  private generateUserId(): number {
    // Generate a unique user ID
    return Math.floor(Math.random() * 1000);
  }
}

/*this.generateUserId(),
private generateUserId(): number {
  // Generate a unique user ID
  return Math.floor(Math.random() * 1000);
}*/
