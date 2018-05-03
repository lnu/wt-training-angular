import {Injectable} from '@angular/core';
import {UserStore} from './user-store';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  //private userStore = new UserStore();

  constructor(private http: HttpClient) {
  }

  addUser(u: User): Observable<any> {
    //this.userStore.addUser(u);
    return this.http.post('https://wt-users.getsandbox.com/users', u);
  }

  removeUser(u: User) {
    //this.userStore.removeUser(u);
    return this.http.delete(`https://wt-users.getsandbox.com/users/${u.id}`);
  }

  getUsersList(): Observable<any> {
    //return this.userStore.getUserList();
    return this.http.get('https://wt-users.getsandbox.com/users');
  }
}
