import {Component} from '@angular/core';

@Component({
  selector: 'wt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wt';
  userName = 'foo';

  constructor() {

  }

  changePicture() {
    this.userName = this.userName + 1;
  }

  getPictureUrl() {
    return `https://robohash.org/${this.userName}`;
  }
}
