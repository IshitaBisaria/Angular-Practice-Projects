import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  game: string[] = ['Rock', 'Paper', 'Scissors'];
  @Input() t!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
