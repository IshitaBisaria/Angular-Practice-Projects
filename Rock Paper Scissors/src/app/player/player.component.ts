import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  imgNo: number = 0;
  @Output() n = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(num: number) {
    this.imgNo = num;
    this.n.emit(num);
  }

}
