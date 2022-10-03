import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // @Output() num: number = 0;
  @Output() num = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  generateNumber() {
    const n = Math.trunc(Math.random() * 6) + 1;
    this.num.emit(n);
    // console.log(this.num);
  }

}
