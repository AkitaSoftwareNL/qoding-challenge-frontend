import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Question} from 'src/classes/question';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})

export class OpenQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionIndex: number;
  @Output() notify = new EventEmitter();
  @ViewChild('input', {static: false}) textarea: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.notify.emit();
    this.textarea.nativeElement.focus();
  }
}


