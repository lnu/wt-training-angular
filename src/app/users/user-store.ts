import { User } from './user';
import { List } from 'immutable';

export class UserStore {
    //private _users: User[] = [];
    private _users = List<User>();

    addUser(user: User) {
        //this._users = [...this._users, user];
        this._users = this._users.push(user);
    }

    removeUser(user: User) {
        const index = this._users.indexOf(user);
        //this._users = [...this._users.slice(0, index), ...this._users.slice(index + 1)];
        this._users = this._users.remove(index);
    }

    getUserList() {
        return this._users.toArray();
    }
}
