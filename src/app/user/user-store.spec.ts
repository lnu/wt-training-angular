import { UserStore } from './user-store';
import { User } from './user';

describe('UserStore', () => {

  let userStore = new UserStore();

  let user1 = new User('Foo', 'BAR');
  let user2 = new User('John', 'DOE');
  let user3 = new User('Foo', 'BAR');

  beforeEach(() => {
    userStore = new UserStore();

    user1 = new User('Foo', 'BAR');
    user2 = new User('John', 'DOE');
    user3 = new User('Foo', 'BAR');
  });

  it('should add users', () => {

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
