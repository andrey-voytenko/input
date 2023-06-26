import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() placeholder: string = '';

  public textarea: string = '';
  public hasFocus: boolean = false;

  public onKey(e: KeyboardEvent) {
    this.textarea = (<HTMLTextAreaElement>e.target).value;
  }

  public onBlur() {
    this.hasFocus = false;
  }

  public onFocus() {
    this.hasFocus = true;
  }
}
