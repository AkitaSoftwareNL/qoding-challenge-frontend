import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsApi } from 'src/api/questions.api';
import { OpenQuestionComponent } from './open-question/open-question.component';
import { MultipleChoiseQuestionComponent } from './multiple-choise-question/multiple-choise-question.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenQuestionComponent,
    MultipleChoiseQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionsApi
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
