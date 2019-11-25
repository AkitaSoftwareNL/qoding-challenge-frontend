import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsApi } from 'src/api/questions.api';
import { Question } from 'src/classes/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  routeParams: Params;
  currentQuestionIndex = 0;
  currentQuestion: Question;
  campaignName: string;
  campaign;
  constructor(private activatedRoute: ActivatedRoute, private questionApi: QuestionsApi) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.campaignName = decodeURIComponent(params.campaignName);
      if (this.campaignName != null) {
        this.playCampagne(this.campaignName);
      }
    });
  }

  playCampagne(campaignName: string) {
    this.campaign = null;
    this.questionApi.get(campaignName).subscribe(campaign => {
      this.currentQuestionIndex = 0;
      this.campaign = campaign;
      this.currentQuestion = this.campaign.questions[0];
    }, error => {
      console.log(error);
      alert('Oeps! Er ging wat mis');
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
    this.questionApi.post(this.campaignName, this.campaign)
      .subscribe(succes => alert('Dank u voor het meedoen aan ' + this.campaignName), error => {
        console.error(error);
        alert('Oeps! Er ging wat mis');
      });
    this.campaign = null;
  }
}
