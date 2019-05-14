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
  head: CellListElement = new CellListElement();

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
        this.states[i][j].symbol = i + j;
        this.states[i][j].nextState = (i + 1) % this.statesCount;
        this.states[i][j].direction = (i * j) % this.statesCount;
      }
    }
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
    if (index == 0) {
      return "L";
    } else if (index == 1) {
      return "P";
    } else {
      return "-"
    }
  }
}
