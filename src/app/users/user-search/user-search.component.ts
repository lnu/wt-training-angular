import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {catchError, debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'wt-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  private userList$: Observable<any>;
  form = new FormGroup({
    searchText: new FormControl(null, [Validators.required])
  });

  constructor(private _httpClient: HttpClient) {
  }


  ngOnInit() {
    this.userList$ = this.form.valueChanges
      .pipe(
        startWith({
          searchText: ''
        }),
        debounceTime(300),
        switchMap(value => {
          return this._search(value);
        })
      );

    /*userList$.subscribe(userDataList => {

      const userList = userDataList
        .map(userData => new User(userData));

      console.log(userList);
    });*/

  }

  private _search(value: { searchText: string }): Observable<User> {
    // don't bind type directly
    return this._httpClient
      .get<any[]>(`https://wt-users.getsandbox.com/users?firstName=${value.searchText}`)
      .pipe(
        catchError(error => of([])),
        map(userDataList => {
          return userDataList
            .map(userData => new User(userData));
        })
      );
  }
}
