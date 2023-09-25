import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() $message: WritableSignal<string> = signal("");
  @Output() sendButton: EventEmitter<any> = new EventEmitter();
}
