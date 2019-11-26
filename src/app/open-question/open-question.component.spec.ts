import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Question } from 'src/classes/question';
import { FormsModule } from '@angular/forms';
import { OpenQuestionComponent } from './open-question.component';

describe('OpenQuestionComponent', () => {
  let component: OpenQuestionComponent;
  let fixture: ComponentFixture<OpenQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenQuestionComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenQuestionComponent);
    component = fixture.componentInstance;
    component.questionIndex = 1;
    component.question = new Question(0, 'open', 'Question', 'Attachent', 0, 'given', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
