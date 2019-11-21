import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})

export class OpenQuestionComponent implements OnInit {
  @Input() question: string;
  @Input() currentIndex: number;
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


