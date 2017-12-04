import { QuestionAnsweringService } from './services/question-answering.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedQuestionService } from './services/selected-question.service';
import { HttpModule } from '@angular/http';
import { AllQuestionsService } from './services/all-questions.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { SelectedQuestionComponent } from './selected-question/selected-question.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllQuestionsComponent,
    SelectedQuestionComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: '', component: AllQuestionsComponent },
      { path: 'selected-question/:id/:caseNumber', component: SelectedQuestionComponent },
      // { path: 'selected-question', component: NotFoundComponent },
    ])
  ],
  providers: [
    AllQuestionsService,
    SelectedQuestionService,
    QuestionAnsweringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
