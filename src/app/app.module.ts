import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaMComponent } from './components/textarea-m/textarea-m.component';
@NgModule({
  declarations: [AppComponent, TextareaComponent, TextareaMComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
