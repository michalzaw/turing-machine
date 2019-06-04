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
  //head: CellListElement = new CellListElement();

  newSymbol: string;
  allSymbols: string;

  statesCount: number = 0;

  constructor() {
    this.symbols.push("~");
    this.symbols.push("0");
    this.symbols.push("1");
    this.allSymbols = this.symbols.join(", ");

    this.statesCount = 3;
    for (let i = 0; i < this.statesCount; ++i) {
      this.states.push(new Array(this.symbols.length));
      for (let j = 0; j < this.states[i].length; ++j) {
        this.states[i][j] = new State();
        this.states[i][j].symbol = (i + j) % this.statesCount;
        this.states[i][j].nextState = (i + 1) % this.statesCount;
        this.states[i][j].direction = 1;
      }
    }

    this.tape = new Array(20);
    for (let i = 0; i < this.tape.length; ++i) {
      this.tape[i] = 0;
    }
    this.currentCell = 10;
    this.currentState = 0;
  }

  addSymbol() {
    this.symbols.push(this.newSymbol);
    this.allSymbols = this.symbols.join(", ");

    for (let i = 0; i < this.states.length; ++i) {
      for (let j = this.states[i].length; j < this.symbols.length; ++j) {
        this.states[i].push(new State());
      }
    }
  }

  statesCountChange() {
    if (this.states.length < this.statesCount) {
      for (let i = this.states.length; i < this.statesCount; ++i) {
        this.states.push(new Array(this.symbols.length));
        for (let j = 0; j < this.states[i].length; ++j) {
          this.states[i][j] = new State();
        }
      }
    } else {
      for (let i = this.states.length; i > this.statesCount; --i) {
        this.states.pop();
      }
    }
  }

  getDirection(index) {
    if (index == -1) {
      return "L";
    } else if (index == 1) {
      return "P";
    } else {
      return "-"
    }
  }

  next() {
    console.log(this.currentCell);
    console.log("symbol: " + this.tape[this.currentCell]);
    let symbolInCurrentTapeCell = this.tape[this.currentCell];
    let currentCellInStateTable = this.states[this.currentState][symbolInCurrentTapeCell];

    this.tape[this.currentCell] = currentCellInStateTable.symbol;
    this.currentCell += currentCellInStateTable.direction;
    this.currentState = currentCellInStateTable.nextState;
    
    console.log(this.currentCell);
    console.log("symbol: " + this.tape[this.currentCell]);
  }

  isActiveState(stateIndex: number, symbolIndex: number) {
    if (this.currentState == stateIndex && this.tape[this.currentCell] == symbolIndex)
    return true;
  }
}
