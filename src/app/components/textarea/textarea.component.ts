import { Component, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextareaComponent,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  get value() {
    return this._value;
  }

  public hasFocus: boolean = false;
  public isDisabled: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};
  private _value: string = '';

  public onKey(e: KeyboardEvent) {
    this.value = (<HTMLTextAreaElement>e.target).value;
  }

  public onBlur() {
    this.hasFocus = false;
  }

  public onFocus() {
    this.onTouched();
    this.hasFocus = true;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
