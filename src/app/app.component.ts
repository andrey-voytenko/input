import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'input';

  exampleForm = new FormGroup({
    description: new FormControl({ value: '', disabled: false }),
    note: new FormControl({ value: '', disabled: true }),
  });

  save() {
    // save me
  }
}
