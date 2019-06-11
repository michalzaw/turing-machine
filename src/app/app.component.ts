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

  onStateChanged(currentState: number) {
    this.currentState = currentState;
  }

  onCellChanged(currentCell: number) {
    this.currentCell = currentCell;
  }
}
