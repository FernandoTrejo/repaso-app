import { Injectable } from '@angular/core';
import { ManageQuizStateService } from '../state/manage-quiz-state.service';
import { QuizState } from 'src/app/models/quiz-state.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleCardsService {

  constructor(
    private manageQuizStateService: ManageQuizStateService
  ) { }

  toggle(currentState : QuizState) {
    let data = {...currentState};
     
    data.frontCardVisibility = !data.frontCardVisibility;
    data.backCardVisibility = !data.backCardVisibility;

    if (data.frontCardVisibility) {
      data.cardText = data.frontText;
      data.cardTitle = 'PREGUNTA';
    } else {
      data.cardText = data.backText;
      data.cardTitle = 'RESPUESTA';
    }

    this.manageQuizStateService.sharingObservableData = data;
  }
}
