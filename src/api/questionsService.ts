import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Campaign } from 'src/classes/campaign';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) { }

  get(campaignid: number) {
    const url = 'http://localhost:8080/campaign/' + campaignid;
    const head = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const param = new HttpParams();
    return this.http.get<Campaign>(url, { headers: head, params: param });
  }

  post(campaignid: number, campaign) {
    const url = 'http://localhost:8080/campaign/' + campaignid;
    const head = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const param = new HttpParams();
    return this.http.post<Campaign>(url, campaign, { headers: head, params: param });
  }
}


//
