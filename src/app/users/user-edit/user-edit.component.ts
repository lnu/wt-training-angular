import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'wt-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnChanges {

  @Input() user: User;
  @Input() buttonLabel: string;
  @Output() userSubmit = new EventEmitter<User>();

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

  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, this.customValidator]),
    lastName: new FormControl(null, [Validators.required]),
    masked: new FormControl('')
  });
  isEditing = true;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => console.log('form changed'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user != null) {
      this.form.reset(this.user);
    }
  }

  submitUser() {
    if (this.user) {
      this.form.value.id = this.user.id;
    }
    const user = new User(this.form.value);
    this.userSubmit.emit(user);
    this.form.reset();
  }
}
