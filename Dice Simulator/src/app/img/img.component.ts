import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() t: number = 0;
  path: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  hey() {
    return `app\images\dice-${this.t}.png`;
  }

}
