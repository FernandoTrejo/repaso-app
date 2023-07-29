import { Injectable } from '@angular/core';
import { QuizState } from 'src/app/models/quiz-state.model';
import { ManageQuizStateService } from '../state/manage-quiz-state.service';

@Injectable({
  providedIn: 'root'
})
export class PassToPrevQuestionService {
  constructor(
    private manageQuizStateService: ManageQuizStateService
  ) { }

  execute(currentState : QuizState) {
    let data = {...currentState};
     
    data.currentIndex--;

    this.manageQuizStateService.sharingObservableData = data;
  }
}
