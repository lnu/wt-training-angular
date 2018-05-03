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
  form: FormGroup;

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
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  addUser() {
    this._userService.addUser(new User(0, this.form.controls.firstName.value, this.form.controls.lastName.value))
      .subscribe(data => this.refreshUsers());
  }

  onRemoveUser(u: User) {
    this._userService.removeUser(u).subscribe(data => this.refreshUsers());
  }

  onUpdateUser(u: User) {
    this._userService.updateUser(u).subscribe(data => this.refreshUsers());
  }
}
