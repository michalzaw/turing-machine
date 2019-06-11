import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/State';

@Component({
  selector: 'state-array',
  templateUrl: './state-array.component.html',
  styleUrls: ['./state-array.component.css']
})
export class StateArrayComponent implements OnInit {

  @Input() states: State[][] = [];
  @Input() symbols: string[] = [];
  @Input() tape: number[];
  @Input() currentCell: number;
  @Input() currentState: number;

  avaliableDirections: string[] = [ "L", "-", "P" ];

  statesCount: number = 0;

  editedStateIndex: number = -1;
  editedSymbolIndex: number = -1;

  editedStateSelectedSymbol: string;
  editedStateSelectedNextState: string;
  editedStateSelectedDirection: string;

  constructor() { }

  ngOnInit() {
    this.statesCount = this.states.length;
  }

  getDirection(index) {
    return this.avaliableDirections[index + 1];
  }

  isActiveState(stateIndex: number, symbolIndex: number) {
    return this.currentState == stateIndex && this.tape[this.currentCell] == symbolIndex;
  }

  isCellInEditMode(stateIndex: number, symbolIndex: number) {
    return this.editedStateIndex == stateIndex && this.editedSymbolIndex == symbolIndex;
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

  edit(stateIndex: number, symbolIndex: number) {
    if (this.isCellInEditMode(stateIndex, symbolIndex)) {
      return;
    }

    this.editedStateIndex = stateIndex;
    this.editedSymbolIndex = symbolIndex;

    this.editedStateSelectedSymbol = this.symbols[this.states[stateIndex][symbolIndex].symbol];
    this.editedStateSelectedNextState = 'q' + this.states[stateIndex][symbolIndex].nextState;
    this.editedStateSelectedDirection = this.getDirection(this.states[stateIndex][symbolIndex].direction);
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
