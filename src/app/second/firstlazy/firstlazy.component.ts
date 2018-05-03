import {Component, OnInit} from '@angular/core';

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
    return `https://robohash.org/${this.userName}`;
  }
}
