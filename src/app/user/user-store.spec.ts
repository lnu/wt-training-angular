class User {
  public FirstName: string;
  public LastName: string;
  constructor(firstName: string, lastName: string) {
    this.FirstName = firstName;
    this.LastName = lastName;
  }
}

class UserStore {
  private _users: User[] = new Array<User>();

  /**
   * addUser
   */
  public addUser(user: User) {
    //this._users.push(user);
    this._users = [...this._users, user];
  }

  public removeUser(user: User) {
    const index = this._users.indexOf(user);
    //this._users.splice(index, 1);
    this._users = this.immutableSplice(this._users, index, 1);
  }

  private immutableSplice(arr, start, deleteCount) {
    return [...arr.slice(0, start), ...arr.slice(start + deleteCount)];
  }

  public getUserList(): User[] {
    return this._users;
  }

}

describe('UserStore', () => {

  it('should add users', () => {

    const userStore = new UserStore();

    const user1 = new User('Foo', 'BAR');
    const user2 = new User('John', 'DOE');
    const user3 = new User('Foo', 'BAR');

    const userListEmpty = userStore.getUserList();

    userStore.addUser(user1);
    userStore.addUser(user2);
    userStore.addUser(user3);

    const userList = userStore.getUserList();

    expect(userListEmpty).toEqual([]);

    expect(userList).toEqual([
      user1,
      user2,
      user3
    ]);

  });

  it('should remove users', () => {

    const userStore = new UserStore();

    const user1 = new User('Foo', 'BAR');
    const user2 = new User('John', 'DOE');
    const user3 = new User('Foo', 'BAR');

    userStore.addUser(user1);
    userStore.addUser(user2);
    userStore.addUser(user3);

    const userListFull = userStore.getUserList();

    userStore.removeUser(user1);

    const userList = userStore.getUserList();

    expect(userListFull).toEqual([
      user1,
      user2,
      user3
    ]);

    expect(userList).toEqual([
      user2,
      user3
    ]);

  });

});
