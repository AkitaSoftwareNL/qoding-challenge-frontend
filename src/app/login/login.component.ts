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
import {ToastrService} from 'ngx-toastr';
import validate = WebAssembly.validate;
import {QuestionsService} from "../../api/questionsService";
import {timeout} from "rxjs/operators";

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
    firstname: ['', Validators.required, Validators.maxLength(100)],
    insertion: ['', Validators.maxLength(100)],
    lastname: ['', Validators.required, Validators.maxLength(100)],
    email: ['', Validators.required, Validators.email, Validators.maxLength(100)],
    // tslint:disable-next-line:max-line-length
    phonenumber: ['', Validators.required, Validators.minLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(16)],
  });
  campaignID: number;
  participantDTO = new Participant();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private participantService: ParticipantService, private router: Router,
              private quizComponent: QuizComponent,
              private authenticationService: AuthenticationService,
              private questionService: QuestionsService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.campaignID = params.id;
      this.questionService.getCampaign(this.campaignID).subscribe(campaign => {
        this.quizComponent.campaign = campaign;
      },
        error => {
        console.log(error);
        this.toast.error(error.valueOf().error.message, 'Campaign not found', {
            timeOut: 60000
          });
        });
    });
  }

  public formIsValid() {
    const controls = this.loginForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        return false;
      }
    }
    return true;
  }

  onSubmit(participant: Participant) {
    console.log(participant);
    if (this.formIsValid()) {
      this.callPost(participant);
    }
  }

  googleLogin() {
    this.authenticationService.doGoogleLogin().then(() => {
      this.createParticipantFromSocial();
      },
      err => {
        console.log(err);
      });
  }

  facebookLogin() {
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
          this.toast.info('Beste ' + participant.firstname + ' ' + ((isNull(participant.insertion)) ? '' : participant.insertion) +
            '' + participant.lastname + ', succes met de quiz!');
          this.quizComponent.userUUID = succes.participantID;
          this.quizComponent.playCampaign(this.quizComponent.campaignID);
        },
        error => {
          this.toast.warning(error.valueOf().error);
          console.log(error.valueOf().error);
        });
  }
}
