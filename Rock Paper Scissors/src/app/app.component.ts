import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scissor';
  w: number = -2;
  s: number = 0;
  players: number[] = [];

  calculate(n: number) {
    if (this.players.length < 2) {
      this.players.push(n);
      // console.log(this.players.length, this.players);
      if (this.players.length === 2) {
        const p1 = this.players[0];
        const p2 = this.players[1];
        // console.log("here" + "p1 " + p1 + " p2 " + p2);
        this.players = [];
        if (p1 == p2) {
          this.w = -1;
        }
        else {
          if (p1 === 1) {
            if (p2 === 3) {
              this.w = 1;
              this.s = 1;
            }
            else if (p2 === 2) {
              this.w = 2;
              this.s = 2;
            }
          } else if (p1 === 2) {
            if (p2 == 1) {
              this.w = 1;
              this.s = 2;
            }
            else if (p2 === 3) {
              this.w = 2;
              this.s = 3;
            }
          } else if (p1 === 3) {
            if (p2 === 1) {
              this.w = 2;
              this.s = 1;
            }
            else if (p2 === 2) {
              this.w = 1;
              this.s = 3;
            }
          }
        }
        // console.log(this.w);
      }
    }
  }
}
