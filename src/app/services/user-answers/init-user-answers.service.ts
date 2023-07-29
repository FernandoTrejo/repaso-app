import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { UserAnswer } from 'src/app/models/user-answer.model';

@Injectable({
  providedIn: 'root'
})
export class InitUserAnswersService {
  init(questionsParam : Question[]) : UserAnswer[] {
    let questions = [...questionsParam];

    let userAnswers : UserAnswer[] = [];
    questions.forEach((question, index) => userAnswers.push({
      key: index,
      response: ''
    }));
    return userAnswers;
  }
}
