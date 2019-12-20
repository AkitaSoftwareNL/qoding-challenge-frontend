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
  errors: any = null;
  participantDTO = new Participant();

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
    this.errors = null;
    if (participant.email === null && participant.phonenumber === null) {
      alert('U moet uw telefoonnummer of emailadres invullen');
    } else {
      this.callPost(participant);
    }
  }

  googleLogin() {
    this.errors = null;
    this.authenticationService.doGoogleLogin().then(() => {
      this.createParticipantFromSocial();
      },
      err => {
        console.log(err);
      });
  }

  facebookLogin() {
    this.errors = null;
    this.authenticationService.doFacebookLogin().then(() => {
        this.createParticipantFromSocial();
      },
      err => {
        console.log(err);
      });
  }

  private createParticipantFromSocial(): void {
    const currentUser = this.authenticationService.afAuth.auth.currentUser;
    const name = currentUser.displayName.split(' ');

    this.authenticationService.afAuth.user.subscribe(result => {
      result.providerData.forEach(test => {
        this.participantDTO.phonenumber = test.phoneNumber;
        this.participantDTO.email = test.email;
        this.participantDTO.firstname = name[0];
        this.participantDTO.insertion = (name.length > 2) ? name[1] + name[name.length - 2] : null;
        this.participantDTO.lastname = (name.length > 1) ? name[name.length - 1] : '';
        this.callPost(this.participantDTO);
      });

    });
  }

  private callPost(participant: Participant) {
    this.participantService.postNewParticipant(participant, this.quizComponent.campaignID)
      .subscribe(succes => {
          alert('Beste ' + participant.firstname + ' ' + ((isNull(participant.insertion)) ? '' : participant.insertion) +
            '' + participant.lastname + ', succes met de quiz!');
          this.quizComponent.userUUID = succes.participantID;
          this.quizComponent.playCampaign(this.quizComponent.campaignID);
        },
        error => {
          this.errors = error.valueOf().error;
        });
  }
}
