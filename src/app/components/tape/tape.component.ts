import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/State';

@Component({
  selector: 'tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {

  @Input() states: State[][] = [];
  @Input() tape: number[];
  @Input() symbols: string[] = [];

  @Input() currentCell: number;
  @Input() currentState: number;
  
  @Output() onStateChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCellChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
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

    this.onStateChanged.emit(this.currentState);
    this.onCellChanged.emit(this.currentCell);
  }

}
