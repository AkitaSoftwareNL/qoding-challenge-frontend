import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionsApi {
  constructor(private http: HttpClient) { }

  get() {
    // let url = 'http://localhost:3000/';
    // let head = new HttpHeaders();
    // let param = new HttpParams().set('value1', '1');
    // return this.http.get(url, { headers: head, params: param });

    let q = [
      {
        questionID: 0,
        question: 'dolor',
        attachment: 'Excepteur nulla esse qui ex et velit et pariatur nostrud sit deserunt non. Nulla nisi dolor adipisicing proident elit esse nostrud fugiat dolore ad magna exercitation amet. Do enim mollit exercitation non est reprehenderit exercitation deserunt proident culpa officia.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 1,
        question: 'ipsum',
        attachment: 'Consectetur anim dolore anim aliqua elit do consequat est laboris velit velit adipisicing. Consequat eu velit cillum est adipisicing consectetur ullamco consequat est ea ex. Labore ea pariatur ad minim proident incididunt magna veniam consectetur. Nisi magna dolore culpa ea Lorem sunt laborum irure laboris dolor et occaecat pariatur. Tempor excepteur anim exercitation eu et quis nulla cupidatat qui deserunt sunt.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 2,
        question: 'incididunt',
        attachment: 'Minim incididunt sunt non nostrud nostrud minim reprehenderit elit cupidatat eiusmod cupidatat adipisicing irure. Ad qui incididunt in reprehenderit anim pariatur dolore amet sunt. Quis non ut adipisicing consequat fugiat sint laboris amet amet aute aliqua aliquip eu sit. Ullamco aliquip eu in mollit deserunt sit adipisicing voluptate do irure qui qui fugiat. Eiusmod eiusmod velit consectetur anim proident officia fugiat dolor ea.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 3,
        question: 'deserunt',
        attachment: 'Sunt ipsum nisi excepteur adipisicing velit et. Adipisicing nulla incididunt irure nisi sunt minim eu pariatur tempor. Fugiat ipsum amet deserunt cillum nostrud mollit consequat sit ad qui nostrud do. Officia non magna velit anim id adipisicing. Qui aute quis ea ex commodo minim est sunt fugiat.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 4,
        question: 'in',
        attachment: 'Fugiat quis exercitation pariatur culpa aute ea in est irure incididunt occaecat sunt. Duis voluptate nisi esse laborum voluptate id culpa aute. Amet consequat adipisicing exercitation id Lorem sint officia. Ex aliqua quis deserunt reprehenderit ea aliquip Lorem id. Esse ut anim eiusmod voluptate ex esse minim culpa exercitation cupidatat sunt minim exercitation.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 5,
        question: 'ullamco',
        attachment: 'Ea dolor cillum magna sit minim laborum ad proident irure. Incididunt adipisicing ex amet officia cillum duis anim eiusmod magna. Magna consequat deserunt esse eiusmod aute. Laborum non dolor consequat ea est sit veniam quis pariatur sint magna est consequat commodo.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 6,
        question: 'exercitation',
        attachment: 'Minim occaecat fugiat velit cillum eiusmod commodo est amet minim proident nisi ex. Anim duis nostrud reprehenderit proident amet irure veniam incididunt officia anim. Officia nisi nostrud minim irure do commodo non Lorem in excepteur.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 7,
        question: 'anim',
        attachment: 'Mollit ullamco dolor adipisicing veniam aute qui nostrud do amet ex pariatur ut dolore. Eiusmod consequat tempor ipsum id culpa culpa amet esse. Veniam id in nostrud veniam do anim. Incididunt elit reprehenderit in ex deserunt labore consequat eiusmod et et culpa. Id qui incididunt deserunt pariatur.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 8,
        question: 'culpa',
        attachment: 'Aliquip amet fugiat consectetur exercitation qui cillum Lorem deserunt incididunt. Id ea do voluptate nisi. Occaecat anim magna consequat eiusmod sint. Non quis sunt quis id consectetur id et. Sint cillum aliquip aute magna aute veniam ipsum aliqua.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      },
      {
        questionID: 9,
        question: 'Lorem',
        attachment: 'Amet magna veniam aliqua commodo proident non deserunt sint laborum. Excepteur officia ipsum enim esse eiusmod ut. Esse fugiat officia labore nostrud anim voluptate cillum ea. Veniam sit velit est velit ipsum reprehenderit cillum dolore cillum incididunt ullamco laboris nostrud. Cillum sit duis excepteur sit veniam reprehenderit dolor. Veniam excepteur dolor tempor ex incididunt.\r\n',
        participantID: 0,
        campaignName: 'J-Fall',
        stateID: 1,
        givenAnswer: ''
      }
    ]
    return q;
  }
}
