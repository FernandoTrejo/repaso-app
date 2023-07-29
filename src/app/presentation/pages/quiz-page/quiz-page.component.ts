import { Component, ElementRef, ViewChild } from '@angular/core';
import { DefaultQuizState, QuizState } from 'src/app/models/quiz-state.model';
import { ToggleCardsService } from 'src/app/services/quizapp/toggle-cards.service';
import { SearchQuestionsByQuizUUIDService } from 'src/app/services/questions/search-questions-by-quiz-uuid.service';
import { ManageQuizStateService } from 'src/app/services/state/manage-quiz-state.service';
import { InitUserAnswersService } from 'src/app/services/user-answers/init-user-answers.service';
import { PassToNextQuestionService } from 'src/app/services/quizapp/pass-to-next-question.service';
import { PassToPrevQuestionService } from 'src/app/services/quizapp/pass-to-prev-question.service';
import { ChangeQuestionService } from 'src/app/services/quizapp/change-question.service';
import { MarkAnswerAsBadService } from 'src/app/services/user-answers/mark-answer-as-bad.service';
import { MarkAnswerAsGoodService } from 'src/app/services/user-answers/mark-answer-as-good.service';
import { MarkAnswerAsRegularService } from 'src/app/services/user-answers/mark-answer-as-regular.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent {
  @ViewChild('card') card !: ElementRef<HTMLDivElement>;
  state : QuizState = DefaultQuizState;
  
  constructor(
    private searchQuestionsByQuizUUIDService: SearchQuestionsByQuizUUIDService,
    private initUserAnswersService: InitUserAnswersService,
    private manageQuizStateService: ManageQuizStateService,
    private toogleCardsService: ToggleCardsService,
    private passToNextQuestionService: PassToNextQuestionService,
    private passToPrevQuestionService: PassToPrevQuestionService,
    private changeQuestionService: ChangeQuestionService,
    private markAnswerAsBadService: MarkAnswerAsBadService,
    private markAnswerAsGoodService: MarkAnswerAsGoodService,
    private markAnswerAsRegularService: MarkAnswerAsRegularService
  ){}

  ngOnInit(): void {
    this.manageQuizStateService.sharingObservable.subscribe(next => {
      this.state = next;
    });
    
    let questions = this.searchQuestionsByQuizUUIDService.search('');
    this.manageQuizStateService.sharingObservableData = {
      ...this.state, 
      questions: questions,
      userAnswers: this.initUserAnswersService.init(questions)
    };

    this.changeQuestion();
  }

  async toggleCards() {
    this.toogleCardsService.toggle(this.state);
    await this.animateCSS('flipInX');
  }

  nextQuestion() {
    if(!this.state.questions[this.state.currentIndex + 1]) return;
    this.passToNextQuestionService.execute(this.state);
    this.changeQuestion();
  }

  prevQuestion() {
    if(!this.state.questions[this.state.currentIndex - 1]) return;
    this.passToPrevQuestionService.execute(this.state);
    this.changeQuestion();
  }

  changeQuestion() {
    this.changeQuestionService.execute(this.state);
  }

  markBadAnswer(){
    this.markAnswerAsBadService.execute(this.state);
  }

  markRegularAnswer(){
    this.markAnswerAsRegularService.execute(this.state);
  }

  markGoodAnswer(){
    this.markAnswerAsGoodService.execute(this.state);
  }



  animateCSS(animation: string, prefix: string = 'animate__') {
    // We create a Promise and return it
    return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;

      this.card.nativeElement.classList.add(`${prefix}animated`, animationName);

      this.card.nativeElement.addEventListener('animationend', () => {
        this.card.nativeElement.classList.remove(`${prefix}animated`, animationName);
      }, { once: true });
    });
  }
}
