import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { QuestionAnsweringService } from './services/question-answering.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedQuestionService } from './services/selected-question.service';
import { HttpModule } from '@angular/http';
import { AllQuestionsService } from './services/all-questions.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { SelectedQuestionComponent } from './selected-question/selected-question.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllQuestionsComponent,
    LoginComponent,
    SelectedQuestionComponent,
    HomeComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: '', component: AllQuestionsComponent },
      { path: 'selected-question/:id/:caseNumber', component: SelectedQuestionComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
      // { path: 'selected-question', component: NotFoundComponent },
    ])
  ],
  providers: [
    AllQuestionsService,
    AuthService,
    SelectedQuestionService,
    QuestionAnsweringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
