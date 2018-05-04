import {Injectable} from '@angular/core';
import {UserStore} from './user-store';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  //private userStore = new UserStore();

  constructor(private http: HttpClient) {
  }

  addUser(u: User): Observable<any> {
    //this.userStore.addUser(u);
    return this.http.post(environment.usersApiUrl, u);
  }

  removeUser(u: User) {
    //this.userStore.removeUser(u);
    return this.http.delete(`${environment.usersApiUrl}/${u.id}`);
  }

  getUsersList(): Observable<any> {
    //return this.userStore.getUserList();
    return this.http.get(environment.usersApiUrl);
    /* .map(res => {
     return res.map(item => {
       return new User(item.id, item.firstName, item.lastName);
     });
   });*/
  }

  updateUser(u: User): Observable<any> {
    //this.userStore.addUser(u);
    return this.http.patch(`${environment.usersApiUrl}/${u.id}`, u);
  }
}
