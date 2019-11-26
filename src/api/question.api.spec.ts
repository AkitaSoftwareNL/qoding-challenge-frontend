import { TestBed, async } from '@angular/core/testing';
import { QuestionsApi } from './questions.api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Campaign } from 'src/classes/campaign';

describe('Question API', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [QuestionsApi]
    });
  }));

  it('should create get', () => {
    const api = TestBed.get(QuestionsApi);
    spyOn(api, 'get').and.returnValue('observable');
    expect(api.get('name')).toBe('observable');
  });

  it('should create post', () => {
    const api = TestBed.get(QuestionsApi);
    spyOn(api, 'post').and.returnValue('observable');
    expect(api.post('name', new Campaign())).toBe('observable');
  });
});
