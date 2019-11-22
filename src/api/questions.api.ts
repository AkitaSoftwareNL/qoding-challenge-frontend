import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Campaign } from 'src/classes/campaign';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsApi {
  constructor(private http: HttpClient) { }

  get(campaignName) {
    let url = 'http://localhost:3000/campaign/';//+ campaignName;
    let head = new HttpHeaders();
    let param = new HttpParams();
    return this.http.get(url, { headers: head, params: param });
  }

  post(campaign) {
    let url = 'http://localhost:3000/campaign';//+ campaign.name;
    let head = new HttpHeaders();
    let param = new HttpParams();
    return this.http.post(url, campaign, { headers: head, params: param });
  }
}
