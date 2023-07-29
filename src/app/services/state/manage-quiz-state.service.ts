import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DefaultQuizState, QuizState } from 'src/app/models/quiz-state.model';

@Injectable({
  providedIn: 'root'
})
export class ManageQuizStateService {
  private data: BehaviorSubject<QuizState> = new BehaviorSubject<QuizState>(DefaultQuizState);

  get sharingObservable() {
    return this.data.asObservable();
  }

  set sharingObservableData(data: QuizState) {
    this.data.next(data);
  }
}
