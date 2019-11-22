import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiseQuestionComponent } from './multiple-choise-question.component';

describe('MultipleChoiseQuestionComponent', () => {
  let component: MultipleChoiseQuestionComponent;
  let fixture: ComponentFixture<MultipleChoiseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
