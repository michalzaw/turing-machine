import { Component } from '@angular/core';
import { State } from 'src/State';
import { CellListElement } from 'src/CellListElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states: State[][] = [];
  symbols: string[] = [];

  tape: number[];
  currentCell: number;
  currentState: number;

  statesCount: number = 0;

  constructor() {
    this.symbols.push("~");
    this.symbols.push("0");
    this.symbols.push("1");

    this.statesCount = 3;
    for (let i = 0; i < this.statesCount; ++i) {
      this.states.push(new Array(this.symbols.length));
      for (let j = 0; j < this.states[i].length; ++j) {
        this.states[i][j] = new State();
        this.states[i][j].symbol = (i + j) % this.statesCount;
        this.states[i][j].nextState = (i + 1) % this.statesCount;
        this.states[i][j].direction = -1;
      }
    }

    this.initTape();
  }

  initTape() {
    this.tape = new Array(20);
    for (let i = 0; i < this.tape.length; ++i) {
      this.tape[i] = 0;
    }
    this.currentCell = 10;
    this.currentState = 0;
  }

  onSymbolAdded(newSymbol: string) {
    for (let i = 0; i < this.states.length; ++i) {
      for (let j = this.states[i].length; j < this.symbols.length; ++j) {
        this.states[i].push(new State());
      }
    }
  }

  next() {
    let symbolInCurrentTapeCell = this.tape[this.currentCell];
    let currentCellInStateTable = this.states[this.currentState][symbolInCurrentTapeCell];

    this.tape[this.currentCell] = currentCellInStateTable.symbol;
    this.currentCell += currentCellInStateTable.direction;
    this.currentState = currentCellInStateTable.nextState;

    if (this.currentCell > this.tape.length - 10) {
      this.tape.push(0);
    }

    if (this.currentCell < 10) {
      this.tape.unshift(0);
      this.currentCell++;
    }
  }

  reset() {
    this.initTape();
  }
}
