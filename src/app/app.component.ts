import { Component } from '@angular/core';
import { QuestionsApi } from 'src/api/questions.api';
import { Question } from 'src/classes/question';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  campagneName = 'J-Fall';
  currentQuestionIndex = 0;
  questions;
  constructor(private questionApi: QuestionsApi) {
    this.play();
  }

  play() {
    this.questions = this.questionApi.get();
  }

  onNext() {
    if (this.questions.length - 1 <= this.currentQuestionIndex) {
      this.send();
      this.currentQuestionIndex = 0;
      this.play();
    } else {
      this.currentQuestionIndex += 1;
    }
  }
  send() {
    console.log(this.questions);
  }
}
