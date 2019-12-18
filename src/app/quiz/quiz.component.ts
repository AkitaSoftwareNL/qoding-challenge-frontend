import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Question} from 'src/classes/question';
import {QuestionsService} from 'src/api/questionsService';
import {Campaign} from 'src/classes/campaign';
import {isNull} from 'util';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  userUUID = '';
  routeParams: Params;
  currentQuestionIndex = 0;
  currentQuestion: Question;
  campaign: Campaign;
  campaignID: number;

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) {
    this.route.params.subscribe(params => {
      this.campaignID = params.id;
    });
  }

  playCampagne(id: number) {
    this.campaignID = id;
    this.campaign = null;
    this.questionsService.get(id).subscribe(campaign => {
      this.currentQuestionIndex = 0;
      this.campaign = campaign;
      this.campaign.participantID = this.userUUID;
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
    console.log(this.campaign);
    this.questionsService.post(this.campaignID, this.campaign)
      .subscribe(succes => alert('Dank u voor het meedoen aan ' + this.campaign.campaignName), error => {
        console.error(error);
        alert('Oeps! Er ging wat mis');
      });
    this.campaign = null;
  }

  isNull(userUUID: string) {
    if (isNull(userUUID)) {
      return false;
    }
    return true;
  }
}
