import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningFormsComponent } from './learning-forms.component';

describe('LearningFormsComponent', () => {
  let component: LearningFormsComponent;
  let fixture: ComponentFixture<LearningFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
