import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenQuestionComponent } from './open-question/open-question.component';
import { QuestionsApi } from 'src/api/questions.api';

@NgModule({
  declarations: [
    AppComponent,
    OpenQuestionComponent
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
