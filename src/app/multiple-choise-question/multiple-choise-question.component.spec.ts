import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiseQuestionComponent } from './multiple-choise-question.component';
import { Question } from 'src/classes/question';

describe('MultipleChoiseQuestionComponent', () => {
  let component: MultipleChoiseQuestionComponent;
  let fixture: ComponentFixture<MultipleChoiseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiseQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiseQuestionComponent);
    component = fixture.componentInstance;
    component.questionIndex = 1;
    component.question = new Question(0, 'multiple', 'Question', 'Attachent', 0, 'given', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
