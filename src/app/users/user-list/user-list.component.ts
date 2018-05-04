import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import {shareReplay} from 'rxjs/operators';
import {User} from '../user';

@Component({
  selector: 'wt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList$: Observable<any>;
  editedUser: User;
  editMode = false;

  constructor(private _userService: UserService) {
    this.refreshUsers();
  }

  refreshUsers() {
    console.log('RefreshUsers called');
    this.userList$ = this._userService.getUsersList()
      .pipe(
        shareReplay(1)
      );
  }

  ngOnInit() {
  }

  trackByUserId(index, user) {
    return user.id;
  }

  addUser(u: User) {
    this._userService.addUser(u)
      .subscribe(data => {
        this.refreshUsers();
      });
  }

  updateUser(u: User) {
    this._userService.updateUser(u)
      .subscribe(data => {
        this.refreshUsers();
        this.editMode = !this.editMode;
      });
  }

  removeUser() {
    this._userService.removeUser(this.editedUser)
      .subscribe(data => {
        this.refreshUsers();
        this.editMode = !this.editMode;
      });
  }

  toggleEdit(u: User) {
    this.editMode = !this.editMode;
    this.editedUser = u;
  }
}
