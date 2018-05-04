import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'wt-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit() {

  }

  getUserAvatar() {
    console.log('avatar retrieved');
    return `https://robohash.org/${this.user.firstName}`;
  }
}
