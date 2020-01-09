import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionComponent } from './multiple-choice-question.component';
import { Question } from 'src/classes/question';

describe('MultipleChoiceQuestionComponent', () => {
  let component: MultipleChoiceQuestionComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiceQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceQuestionComponent);
    component = fixture.componentInstance;
    component.questionIndex = 1;
    component.question = new Question(0, 'multiple', 'Question', 'Attachent', 0, 'given', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
