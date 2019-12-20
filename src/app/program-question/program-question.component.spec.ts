import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgramQuestionComponent} from './program-question.component';

describe('ProgramQuestionComponent', () => {
  let component: ProgramQuestionComponent;
  let fixture: ComponentFixture<ProgramQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramQuestionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
