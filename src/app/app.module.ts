import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsService } from 'src/api/questionsService';
import { OpenQuestionComponent } from './open-question/open-question.component';
import { MultipleChoiseQuestionComponent } from './multiple-choise-question/multiple-choise-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProgramQuestionComponent } from './program-question/program-question.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenQuestionComponent,
    MultipleChoiseQuestionComponent,
    QuizComponent,
    ProgramQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
