import { Injectable } from '@angular/core';
import { ManageQuizStateService } from '../state/manage-quiz-state.service';
import { QuizState } from 'src/app/models/quiz-state.model';

@Injectable({
  providedIn: 'root'
})
export class PassToNextQuestionService {
  constructor(
    private manageQuizStateService: ManageQuizStateService
  ) { }

  execute(currentState : QuizState) {
    let data = {...currentState};
     
    data.currentIndex++;

    this.manageQuizStateService.sharingObservableData = data;
  }
}
