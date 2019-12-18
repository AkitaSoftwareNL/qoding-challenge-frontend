import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from 'events';
import {Participant} from '../../classes/participant';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ParticipantService} from '../../api/participant.service';
import {isNull} from 'util';
import {QuizComponent} from '../quiz/quiz.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Deelnemen';
  // @ts-ignore
  @Output() participant = new EventEmitter<Participant>();
  loginWithoutSocial = null;
  routeSub: Subscription;
  loginForm = this.formBuilder.group({
    firstname: [null, Validators.required],
    insertion: [null],
    lastname: [null, Validators.required],
    email: [null],
    phonenumber: [null],
  });
  campaignID: number;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private participantService: ParticipantService, private router: Router,
              private quizComponent: QuizComponent) {

  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params.campaignID;
    });
  }

  onSubmit(participant: Participant) {
    console.log(participant);
    if (participant.email === null && participant.phonenumber === null) {
      alert('U moet uw telefoonnummer of emailadres invullen');
    }
    this.participantService.post(participant, this.quizComponent.campaignID)
      .subscribe(succes => {
          console.log(succes);
          alert('Beste ' + participant.firstname + ' ' + ((isNull(participant.insertion)) ? '' : participant.insertion) +
            '' + participant.lastname + ', succes met de quiz!');
          this.quizComponent.userUUID = succes.participantID;
          this.quizComponent.playCampagne(this.quizComponent.campaignID);
        },
        error => {
          console.log(error);
          alert('Oeps er ging iets mis bij uw deelname, ga na een medewerker van Quintor.');
        });
  }
}
