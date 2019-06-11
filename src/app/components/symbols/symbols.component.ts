import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  @Input() symbols: string[];

  @Output() onSymbolAdded: EventEmitter<string> = new EventEmitter<string>();

  newSymbol: string;

  constructor() { }

  ngOnInit() {
  }

  addSymbol() {
    this.symbols.push(this.newSymbol);
    
    this.onSymbolAdded.emit(this.newSymbol);

    this.newSymbol = "";
  }

}
