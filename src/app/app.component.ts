import { Component } from '@angular/core';
import { State } from 'src/State';
import { CellListElement } from 'src/CellListElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  avaliableDirections: string[] = [ "L", "-", "P" ];

  states: State[][] = [];
  symbols: string[] = [];

  tape: number[];
  currentCell: number;
  currentState: number;
  //head: CellListElement = new CellListElement();

  statesCount: number = 0;

  editedStateIndex: number = -1;
  editedSymbolIndex: number = -1;

  editedStateSelectedSymbol: string;
  editedStateSelectedNextState: string;
  editedStateSelectedDirection: string;

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
        this.states[i].push(this.createNewState());
      }
    }
  }

  createNewState() {
    let state = new State();
    state.symbol = 0;
    state.nextState = 0;
    state.direction = 0;

    return state;
  }

  statesCountChange() {
    if (this.states.length < this.statesCount) {
      for (let i = this.states.length; i < this.statesCount; ++i) {
        this.states.push(new Array(this.symbols.length));
        for (let j = 0; j < this.states[i].length; ++j) {
          this.states[i][j] = this.createNewState();
        }
      }
    } else {
      for (let i = this.states.length; i > this.statesCount; --i) {
        this.states.pop();
      }
    }
  }

  getDirection(index) {
    //todo: using this.avaliableDirections array
    if (index == -1) {
      return "L";
    } else if (index == 1) {
      return "P";
    } else {
      return "-"
    }
  }

  next() {
    let symbolInCurrentTapeCell = this.tape[this.currentCell];
    let currentCellInStateTable = this.states[this.currentState][symbolInCurrentTapeCell];

    this.tape[this.currentCell] = currentCellInStateTable.symbol;
    this.currentCell += currentCellInStateTable.direction;
    this.currentState = currentCellInStateTable.nextState;

    if (this.currentCell > this.tape.length - 3) {
      this.tape.push(0);
    }

    if (this.currentCell < 3) {
      this.tape.unshift(0);
      this.currentCell++;
    }
  }

  isActiveState(stateIndex: number, symbolIndex: number) {
    if (this.currentState == stateIndex && this.tape[this.currentCell] == symbolIndex)
    return true;
  }

  edit(stateIndex: number, symbolIndex: number) {
    if (this.isCellInEditMode(stateIndex, symbolIndex)) {
      return;
    }

    this.editedStateIndex = stateIndex;
    this.editedSymbolIndex = symbolIndex;

    this.editedStateSelectedSymbol = this.symbols[this.states[stateIndex][symbolIndex].symbol];
    this.editedStateSelectedNextState = 'q' + this.states[stateIndex][symbolIndex].nextState;
    this.editedStateSelectedDirection = this.getDirection(this.states[stateIndex][symbolIndex].direction);

    console.log("edit");
  }

  isCellInEditMode(stateIndex: number, symbolIndex: number) {
    return this.editedStateIndex == stateIndex && this.editedSymbolIndex == symbolIndex;
  }

  editOk() {
    this.symbols.forEach((symbol, index) => {
      if (symbol == this.editedStateSelectedSymbol) {
        this.states[this.editedStateIndex][this.editedSymbolIndex].symbol = index;
      }
    })

    this.states[this.editedStateIndex][this.editedSymbolIndex].nextState = +this.editedStateSelectedNextState.substr(1);

    this.avaliableDirections.forEach((direction, index) => {
      if (direction == this.editedStateSelectedDirection) {
        this.states[this.editedStateIndex][this.editedSymbolIndex].direction = index - 1;
      }
    })

    this.editedStateIndex = -1;
    this.editedSymbolIndex = -1;

  }
}
