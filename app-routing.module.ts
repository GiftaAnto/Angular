import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {QuizComponent} from './quiz.component';

const routes: Route[] = [
  { path: 'quiz', component: QuizComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
