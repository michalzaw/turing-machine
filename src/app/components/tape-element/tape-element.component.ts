import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tape-element',
  templateUrl: './tape-element.component.html',
  styleUrls: ['./tape-element.component.css']
})
export class TapeElementComponent {
  @Input() filled: boolean;

  constructor() { }
}
