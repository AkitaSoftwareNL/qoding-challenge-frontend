import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Campaign } from 'src/classes/campaign';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsApi {
  constructor(private http: HttpClient) { }

  get(campaignName: string) {
    const url = 'http://localhost:3000/campaigns/' + campaignName;
    const head = new HttpHeaders();
    const param = new HttpParams();
    return this.http.get(url, { headers: head, params: param });
  }

  post(campaignName: string, campaign: Campaign) {
    const url = 'http://localhost:3000/campaigns/' + campaignName;
    const head = new HttpHeaders();
    const param = new HttpParams();
    return this.http.post(url, campaign, { headers: head, params: param });
  }
}
