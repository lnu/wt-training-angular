import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'wt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  firstName: string;
  lastName: string;

  data: any;
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

  addUser() {
    this._userService.addUser(new User(0, this.firstName, this.lastName)).subscribe(data => this.refreshUsers());
  }

  onRemoveUser(u: User) {
    this._userService.removeUser(u).subscribe(data => this.refreshUsers());
  }
}
