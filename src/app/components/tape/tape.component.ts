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

  constructor() { }

  ngOnInit() {
  }

}
