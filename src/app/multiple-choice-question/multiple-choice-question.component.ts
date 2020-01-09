import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/classes/question';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})

export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  next(answer) {
    this.question.givenAnswer[0] = answer;
    this.notify.emit();
  }
}
