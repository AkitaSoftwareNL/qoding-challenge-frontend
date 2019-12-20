import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Question} from 'src/classes/question';

@Component({
  selector: 'app-program-question',
  templateUrl: './program-question.component.html',
  styleUrls: ['./program-question.component.css']
})
export class ProgramQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  @ViewChild('input', {static: false}) textarea: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.question.givenAnswer = this.question.startCode;
  }

  next() {
    this.notify.emit();
    this.textarea.nativeElement.focus();
  }

}
