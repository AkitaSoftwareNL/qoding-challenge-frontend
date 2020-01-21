import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from 'src/classes/question';
import {QuestionsService} from 'src/api/questionsService';
import {Campaign} from 'src/classes/campaign';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  userUUID = '';
  currentQuestionIndex = 0;
  currentQuestion: Question;
  campaign: Campaign;
  campaignID: number;
  endscreen = false;
  message: string;

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService, private toast: ToastrService) {
    this.route.params.subscribe(params => {
      this.campaignID = params.id;
    });
  }

  playCampaign(id: number) {
    this.campaignID = id;
    this.campaign = null;
    this.questionsService.getCampaign(id).subscribe(campaign => {
      this.currentQuestionIndex = 0;
      this.campaign = campaign;
      this.campaign.participantID = this.userUUID;
      this.currentQuestion = this.campaign.questions[0];
    }, error => {
      console.log(error);
      this.toast.info(error.valueOf().error.message);
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
    this.endscreen = true;
    this.questionsService.postParticipantAnswers(this.campaignID, this.campaign)
      .subscribe(() => error => {
        console.error(error);
        this.toast.info(error.valueOf().error.message);
      });
    this.message = 'Bedankt voor het meedoen aan ' + this.campaign.campaignName + '!';
    this.campaign = null;
  }
}
