import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPageComponent } from './presentation/pages/quiz-page/quiz-page.component';

const routes: Routes = [
  {
    path: 'quiz/:quiz_uuid',
    component: QuizPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
