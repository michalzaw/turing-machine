import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tape-initializer',
  templateUrl: './tape-initializer.component.html',
  styleUrls: ['./tape-initializer.component.css']
})
export class TapeInitializerComponent implements OnInit {

  @Input() tape: number[];

  @Output() tapeInitialized = new EventEmitter<string>();

  tapeInitState: string = "";

  constructor() { }

  ngOnInit() {
  }

  initTape() {
    this.tapeInitialized.emit(this.tapeInitState);

    this.tapeInitState = "";
  }

}
