import { Injectable } from '@angular/core';
import { QuizState } from 'src/app/models/quiz-state.model';
import { ManageQuizStateService } from '../state/manage-quiz-state.service';

@Injectable({
  providedIn: 'root'
})
export class MarkAnswerAsGoodService {
  constructor(
    private manageQuizStateService: ManageQuizStateService
  ) { }

  execute(currentState : QuizState) {
    let data = {...currentState};
     
    data.userAnswers[data.currentIndex].response = 'good';
    data.currentQuestionResponseType = 'good';

    this.manageQuizStateService.sharingObservableData = data;
  }
}
