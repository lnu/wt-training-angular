import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'wt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList$: Observable<any>;

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

}
