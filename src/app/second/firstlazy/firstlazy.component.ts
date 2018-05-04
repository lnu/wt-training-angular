import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'wt-firstlazy',
  templateUrl: './firstlazy.component.html',
  styleUrls: ['./firstlazy.component.css']
})
export class FirstlazyComponent implements OnInit {

  userName = 'foo';

  constructor() {
  }

  ngOnInit() {
  }

  changePicture() {
    this.userName = this.userName + 1;
  }

  getPictureUrl() {
    return `${environment.roboHashUrl}/${this.userName}`;
  }
}
