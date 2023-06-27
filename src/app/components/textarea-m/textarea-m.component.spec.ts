import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaMComponent } from './textarea-m.component';

describe('TextareaMComponent', () => {
  let component: TextareaMComponent;
  let fixture: ComponentFixture<TextareaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextareaMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
