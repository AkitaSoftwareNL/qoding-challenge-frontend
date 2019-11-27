import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/classes/question';

@Component({
  selector: 'app-multiple-choise-question',
  templateUrl: './multiple-choise-question.component.html',
  styleUrls: ['./multiple-choise-question.component.css']
})

export class MultipleChoiseQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  next(answer) {
    this.question.givenAnswer = answer;
    this.notify.emit();
  }
}
