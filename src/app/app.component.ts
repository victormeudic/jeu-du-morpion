import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { State } from './case/case.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jeu-du-morpion';
  public cases: State[][] = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
  ];

  currentstate: 'circle' | 'cross' = 'circle';

  gagne: boolean = false;
  perdue: boolean = false;

  ngOnInit(): void {
    console.log(this.cases);
    console.log(this.cases[0][1]);
  }

  checkBox(i: number, j: number) {
    if (this.currentstate === 'cross') {
      this.currentstate = 'circle';
    } else if (this.currentstate === 'circle') {
      this.currentstate = 'cross';
    }
    if (
      this.cases[i][j] !== 'circle' &&
      this.cases[i][j] !== 'cross' &&
      this.cases[i][j] !== 'star' &&
      !this.gagne &&
      !this.perdue
    ) {
      this.cases[i][j] = this.currentstate;
      this.checkWin();
    }
  }

  checkWin() {
    if (
      this.checkIfSame(this.cases[0][0], this.cases[1][0], this.cases[2][0])
    ) {
      this.gagne = true;
      this.cases[0][0] = 'star';
      this.cases[1][0] = 'star';
      this.cases[2][0] = 'star';
    } else if (
      this.checkIfSame(this.cases[0][1], this.cases[1][1], this.cases[2][1])
    ) {
      this.gagne = true;
      this.cases[0][1] = 'star';
      this.cases[1][1] = 'star';
      this.cases[2][1] = 'star';
    } else if (
      this.checkIfSame(this.cases[0][2], this.cases[1][2], this.cases[2][2])
    ) {
      this.gagne = true;
      this.cases[0][2] = 'star';
      this.cases[1][2] = 'star';
      this.cases[2][2] = 'star';
    } else if (
      this.checkIfSame(this.cases[0][0], this.cases[0][1], this.cases[0][2])
    ) {
      this.gagne = true;
      this.cases[0][0] = 'star';
      this.cases[0][1] = 'star';
      this.cases[0][2] = 'star';
    } else if (
      this.checkIfSame(this.cases[1][0], this.cases[1][1], this.cases[1][2])
    ) {
      this.gagne = true;
      this.cases[1][0] = 'star';
      this.cases[1][1] = 'star';
      this.cases[1][2] = 'star';
    } else if (
      this.checkIfSame(this.cases[2][0], this.cases[2][1], this.cases[2][2])
    ) {
      this.gagne = true;
      this.cases[2][0] = 'star';
      this.cases[2][1] = 'star';
      this.cases[2][2] = 'star';
    } else if (
      this.checkIfSame(this.cases[0][0], this.cases[1][1], this.cases[2][2])
    ) {
      this.gagne = true;
      this.cases[0][0] = 'star';
      this.cases[1][1] = 'star';
      this.cases[2][2] = 'star';
    } else if (
      this.checkIfSame(this.cases[0][2], this.cases[1][1], this.cases[2][0])
    ) {
      this.gagne = true;
      this.cases[0][2] = 'star';
      this.cases[1][1] = 'star';
      this.cases[2][0] = 'star';
    } else {
      let hasEmpty = false;
      for (const ligne of this.cases) {
        for (const bloc of ligne) {
          if (bloc === 'empty') {
            hasEmpty = true;
            break;
          }
        }
      }

      if (hasEmpty === false) {
        this.perdue = true;
      }
    }
  }

  private checkIfSame(case1: State, case2: State, case3: State) {
    return (
      (case1 === 'circle' && case2 === 'circle' && case3 === 'circle') ||
      (case1 === 'cross' && case2 === 'cross' && case3 === 'cross')
    );
  }
}
