import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'wt-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent implements OnInit {

  @Input() user: User;
  @Output() userRemove: EventEmitter<User> = new EventEmitter();
  @Output() userUpdate: EventEmitter<User> = new EventEmitter();

  editMode = false;
  firstName: string;
  lastName: string;

  constructor() {
  }

  ngOnInit() {
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
  }

  getUserAvatar() {
    console.log('avatar retrieved');
    return `https://robohash.org/${this.user.firstName}`;
  }

  removeUser() {
    this.userRemove.emit(this.user);
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  updateUser() {
    this.userUpdate.emit(new User(this.user.id, this.firstName, this.lastName));
  }
}
