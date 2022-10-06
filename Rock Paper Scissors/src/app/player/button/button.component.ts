import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() num = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  generateNumber() {
    let n = Math.trunc(Math.random() * 3) + 1;
    this.num.emit(n);
    // console.log(n);
  }

}
