import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea-m',
  templateUrl: './textarea-m.component.html',
  styleUrls: ['./textarea-m.component.scss'],
})
export class TextareaMComponent {
  @Input() control?: FormControl;
  @Input() placeholder: string = '';
  @Input()
  set value(val) {
    this._value = val;
  }

  get value() {
    return this._value;
  }

  public hasFocus: boolean = false;
  private _value: string = '';

  public onKey(e: KeyboardEvent) {
    const value = (<HTMLTextAreaElement>e.target).value;
    this.value = value;
    this.control?.patchValue(value);
  }

  public onBlur() {
    this.hasFocus = false;
  }

  public onFocus() {
    this.hasFocus = true;
  }
}
