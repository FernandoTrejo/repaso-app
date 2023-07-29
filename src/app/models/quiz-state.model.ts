import { Question } from "./question.model";
import { UserAnswer } from "./user-answer.model";

export interface QuizState {
    questions: Question[],
    frontCardVisibility: boolean,
    backCardVisibility: boolean,
    userAnswers: UserAnswer[],
    frontText: string,
    backText: string,
    currentQuestionResponseType: string,
    cardText: string,
    cardTitle: string,
    currentIndex: number
}

export const DefaultQuizState: QuizState = {
    questions: [],
    frontCardVisibility: true,
    backCardVisibility: false,
    userAnswers: [],
    frontText: '',
    backText: '',
    currentQuestionResponseType: '',
    cardText: '',
    cardTitle: 'PREGUNTA',
    currentIndex: 0,
  }