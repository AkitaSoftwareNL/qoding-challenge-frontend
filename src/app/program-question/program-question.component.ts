import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Question } from 'src/classes/question';

@Component({
  selector: 'app-program-question',
  templateUrl: './program-question.component.html',
  styleUrls: ['./program-question.component.css']
})
export class ProgramQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  @ViewChild('input') textarea: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.notify.emit();
    this.textarea.nativeElement.focus();
  }

}
