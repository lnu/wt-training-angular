import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'wt-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  @Input() user: User;
  @Output() userRemove: EventEmitter<User> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getUserAvatar() {
    return `https://robohash.org/${this.user.firstName}`;
  }

  removeUser() {
    this.userRemove.emit(this.user);
  }
}
