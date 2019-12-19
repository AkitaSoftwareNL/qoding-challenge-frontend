import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventEmitter} from 'events';
import {Participant} from '../../classes/participant';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ParticipantService} from '../../api/participant.service';
import {isNull} from 'util';
import {QuizComponent} from '../quiz/quiz.component';
import {AuthenticationService} from '../../api/authentication.service';
import 'rxjs-compat/add/observable/fromPromise';

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
  userCred: Array<any> = [];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private participantService: ParticipantService, private router: Router,
              private quizComponent: QuizComponent,
              private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params.campaignID;
    });
  }

  onSubmit(participant: Participant) {
    if (participant.email === null && participant.phonenumber === null) {
      alert('U moet uw telefoonnummer of emailadres invullen');
    } else {
      this.callPost(participant);
    }
  }

  googleLogin() {
    this.authenticationService.doGoogleLogin().then(() => {
        const participant = new Participant();
        const currentUser = this.authenticationService.afAuth.auth.currentUser;
        const name = currentUser.displayName.split(' ');
        participant.phonenumber = currentUser.phoneNumber;
        participant.email = currentUser.email;
        participant.firstname = name[0];
        participant.insertion = (name.length > 2) ? name[1] + name[name.length - 2] : null;
        participant.lastname = (name.length > 1) ? name[name.length - 1] : null;
        this.callPost(participant);
      },
      err => {
        console.log(err);
      });
  }

  private callPost(participant: Participant) {
    this.participantService.post(participant, this.quizComponent.campaignID)
      .subscribe(succes => {
          alert('Beste ' + participant.firstname + ' ' + ((isNull(participant.insertion)) ? '' : participant.insertion) +
            '' + participant.lastname + ', succes met de quiz!');
          this.quizComponent.userUUID = succes.participantID;
          this.quizComponent.playCampagne(this.quizComponent.campaignID);
        },
        error => {
          alert('Oeps er ging iets mis bij uw deelname, ga na een medewerker van Quintor.');
        });
  }
}
