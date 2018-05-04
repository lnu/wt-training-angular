import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import {shareReplay} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  firstName: string;
  lastName: string;

  userList$: Observable<any>;

  constructor(private _userService: UserService) {
    this.refreshUsers();
  }

  private refreshUsers() {
    this.userList$ = this._userService.getUsersList()
      .pipe(
        shareReplay(1)
      );
  }

  ngOnInit() {
  }

  onRemoveUser(u: User) {
    this._userService.removeUser(u).subscribe(data => this.refreshUsers());
  }

  onUpdateUser(u: User) {
    this._userService.updateUser(u).subscribe(data => this.refreshUsers());
  }

  trackByUserId(index, user) {
    return user.id;
  }

  onUserSubmit(u: User) {
    this._userService.addUser(u)
      .subscribe(data => this.refreshUsers());
  }
}
