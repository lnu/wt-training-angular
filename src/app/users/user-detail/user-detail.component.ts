import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {UserService} from '../user.service';

@Component({
  selector: 'wt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>;
  _userId;

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
  }

  ngOnInit() {
    this._userId = this._route.snapshot.params.userId;
    this.user$ = this._userService.getUser(this._userId);
  }

  updateUser(u: User) {
    this._userService.updateUser(u)
      .subscribe(data => {
        this._router.navigate(['/Users/search']);
      });
  }
}
