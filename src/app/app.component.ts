import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from 'src/api/questionsService';
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
  campaignName = '';
  campaign;
  constructor(private activatedRoute: ActivatedRoute, private questionsService: QuestionsService) {

    this.activatedRoute.queryParams.subscribe(params => {
      const name = decodeURIComponent(params.campaignName);
      if (name !== 'undefined') {
        this.playCampagne(name);
        this.campaignName = name;
      }
    });
  }

  playCampagne(campaignName: string) {
    this.campaign = null;
    this.questionsService.get(campaignName).subscribe(campaign => {
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
    this.questionsService.post(this.campaignName, this.campaign)
      .subscribe(succes => alert('Dank u voor het meedoen aan ' + this.campaignName), error => {
        console.error(error);
        alert('Oeps! Er ging wat mis');
      });
    this.campaign = null;
  }
}
