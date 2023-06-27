import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  @Input() user!: User;
  @Output() save = new EventEmitter<User>();

  editedUser!: User;

  ngOnInit() {
    // Create a deep copy of the user object to avoid modifying the original user
    this.editedUser = { ...this.user };
  }

  saveUser(): void {
    // Emit the edited user to the parent component
    this.save.emit(this.editedUser);
  }
}

