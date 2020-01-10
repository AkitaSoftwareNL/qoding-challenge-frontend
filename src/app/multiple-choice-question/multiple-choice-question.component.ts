import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/classes/question';
import {send} from "q";

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})

export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  givenAnswers = Array();

  constructor() { }

  ngOnInit() {
  }

  Onclick(answer, correctAmountOfQuestions) {
    if (correctAmountOfQuestions) {
      this.update(answer);
    } else {
      this.send(answer);
    }
  }

  send(answer) {
    this.question.givenAnswers[0] = answer;
    this.notify.emit();
  }

  update(answer) {
    if (this.givenAnswers.indexOf(answer) !== -1) {
      this.givenAnswers.splice(this.givenAnswers.indexOf(answer), 1);
    } else {
      this.givenAnswers.push(answer);
    }
  }

  next() {
    this.question.givenAnswers = this.givenAnswers;
    this.notify.emit();
  }

  switch(answer) {
    if (this.givenAnswers.indexOf(answer) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
