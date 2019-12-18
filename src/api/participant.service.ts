import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Participant} from '../classes/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) {
  }

  post(participant: Participant, campaignID: number) {
    const url = 'http://localhost:8080/login/' + campaignID;
    const head = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const param = new HttpParams();
    return this.http.post<Participant>(url, participant, {headers: head, params: param});
  }
}
