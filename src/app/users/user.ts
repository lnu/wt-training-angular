/*export class User {
  constructor(public id: number, public firstName: string, public lastName: string) {
  }
}*/


export class UserSchema {

  firstName?: string;
  lastName?: string;
  id?: string;

  constructor(args: UserSchema = {}) {
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.id = args.id;
  }

}

export class User extends UserSchema {
}

