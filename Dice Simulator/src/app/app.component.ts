import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dice-simulator';
  img: number = 0;

  hi(num: number) {
    this.img = num;
    // console.log(num);
  }
}
