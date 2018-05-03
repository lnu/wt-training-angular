import {Injectable} from '@angular/core';
import {UserStore} from './user-store';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  //private userStore = new UserStore();
  private _url = 'https://wt-users.getsandbox.com/users';

  constructor(private http: HttpClient) {
  }

  addUser(u: User): Observable<any> {
    //this.userStore.addUser(u);
    return this.http.post(this._url, u);
  }

  removeUser(u: User) {
    //this.userStore.removeUser(u);
    return this.http.delete(`${this._url}/${u.id}`);
  }

  getUsersList(): Observable<any> {
    //return this.userStore.getUserList();
    return this.http.get(this._url);
     /* .map(res => {
      return res.map(item => {
        return new User(item.id, item.firstName, item.lastName);
      });
    });*/
  }

  updateUser(u: User): Observable<any> {
    //this.userStore.addUser(u);
    return this.http.put(this._url, u);
  }
}
