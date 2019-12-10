import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) { }

  get(campaignName: string) {
    const url = 'http://localhost:8080/campaign/' + campaignName;
    const head = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const param = new HttpParams();
    return this.http.get(url, { headers: head, params: param });
  }

  post(campaignName: string, campaign) {
    const url = 'http://localhost:8080/campaign/' + campaignName;
    const head = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    const param = new HttpParams();
    return this.http.post(url, campaign, { headers: head, params: param });
  }
}


//
