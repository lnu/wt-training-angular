import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'wt-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: User;
  @Output() userUpdated = new EventEmitter();

  form: FormGroup;
  editMode = false;
  isEditing = true;

  constructor(private _userService: UserService) {
  }

  customValidator: ValidatorFn = (control) => {
    if (control.value === 'Nicko') {
      return {
        'customValidator': {
          person: control.value,
          reason: 'fk drummer'
        }
      };
    }
    return null;
  };

  ngOnInit() {
    if (!this.user) {
      this.isEditing = false;
      this.user = new User(0, '', '');
    }
    this.form = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required, this.customValidator]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      masked: new FormControl('')
    });

    this.form.valueChanges.subscribe(data => console.log('form changed'));
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  addUser() {
    this._userService.addUser(new User(this.user.id, this.form.controls.firstName.value, this.form.controls.lastName.value))
      .subscribe(data => this.userUpdated.emit(data));
  }

  updateUser() {
    this._userService.updateUser(new User(this.user.id, this.form.controls.firstName.value, this.form.controls.lastName.value))
      .subscribe(data => {
        this.userUpdated.emit(data);
        this.toggleEdit();
      });
  }

  removeUser() {
    this._userService.removeUser(this.user)
      .subscribe(data => this.userUpdated.emit(data));
  }
}
