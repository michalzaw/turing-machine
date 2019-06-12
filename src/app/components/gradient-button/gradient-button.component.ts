import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.css']
})
export class GradientButtonComponent  {
  @Output() buttonPressed = new EventEmitter<void>();

  constructor() { }

  onButtonClick() {
    this.buttonPressed.emit();
  }
}
