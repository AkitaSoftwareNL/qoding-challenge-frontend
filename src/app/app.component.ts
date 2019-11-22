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
    this.playCampagne('J-Fall');
  }

  playCampagne(campaignName) {
    this.campaign = null;
    this.questionApi.get(campaignName).subscribe(campaign => {
      this.currentQuestionIndex = 0;
      this.campaign = campaign;
      this.currentQuestion = this.campaign.questions[0];
    });
  }

  onNext() {
    if (this.campaign.questions.length - 1 <= this.currentQuestionIndex) {
      this.send();
    } else {
      this.currentQuestionIndex += 1;
      this.currentQuestion = this.campaign.questions[this.currentQuestionIndex];
    }
  }

  send() {
    this.questionApi.post(this.campaign)
      .subscribe(succes => this.playCampagne('J-Fall'), error => console.error(error));
    this.campaign = null;
  }
}
