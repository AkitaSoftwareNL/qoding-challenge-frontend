import { Component } from '@angular/core';
import { QuestionsApi } from 'src/api/questions.api';
import { Question } from 'src/classes/question';
import { Campaign } from 'src/classes/campaign';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentQuestionIndex = 0;
  currentQuestion: Question;
  campaign;
  constructor(private questionApi: QuestionsApi) {
    this.playCampagne();
  }

  playCampagne() {
    this.campaign = null;
    this.questionApi.get().subscribe(campaign => {
      this.campaign = campaign;
      this.currentQuestion = this.campaign.questions[0];
    });
  }

  onNext() {
    if (this.campaign.questions.length - 1 <= this.currentQuestionIndex) {
      this.send();
      this.currentQuestionIndex = 0;
      this.playCampagne();
    } else {
      this.currentQuestionIndex += 1;
      this.currentQuestion = this.campaign.questions[this.currentQuestionIndex];
    }
  }

  send() {
    this.questionApi.post(this.campaign)
      .subscribe(success => alert("Done"),
        error => alert(error));
  }
}
