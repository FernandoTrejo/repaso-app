import { Injectable } from '@angular/core';
import { ManageQuizStateService } from '../state/manage-quiz-state.service';
import { QuizState } from 'src/app/models/quiz-state.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeQuestionService {

  constructor(
    private manageQuizStateService: ManageQuizStateService
  ) { }

  execute(currentState : QuizState) {
    let data = {...currentState};

    data.frontText = data.questions[data.currentIndex].title;
    data.backText = data.questions[data.currentIndex].answer;
    data.cardText = data.frontText;
    data.currentQuestionResponseType = data.userAnswers[data.currentIndex].response;
    data.frontCardVisibility = true;
    data.backCardVisibility = false;
    data.cardTitle = 'PREGUNTA';
    this.manageQuizStateService.sharingObservableData = data;
  }
}
