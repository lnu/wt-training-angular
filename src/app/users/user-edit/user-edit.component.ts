import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'wt-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Output() userSubmit = new EventEmitter<User>();
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  addUser() {
    this.userSubmit.emit(new User(0, this.form.controls.firstName.value, this.form.controls.lastName.value));
  }
}
