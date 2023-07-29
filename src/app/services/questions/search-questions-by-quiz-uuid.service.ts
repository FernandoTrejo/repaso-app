import { Injectable } from '@angular/core';
import { Question } from './../../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class SearchQuestionsByQuizUUIDService {
  search(uuid : string) : Question[]{
    return [
      {
        title: 'El periodo en el que aparecieron la agricultura y los asentamientos sedentarios se llama:',
        answer: 'Neolítico'
      },
      {
        title: '¿Cuándo se inventó la escritura?',
        answer: 'En IV milenio a. C.'
      },
      {
        title: '¿Cómo se llamaban los gobernantes del antiguo Egipto?',
        answer: 'Faraones'
      },
      {
        title: 'Según las leyendas de la antiguedad, ¿quiénes fundaron a Roma?',
        answer: 'Rómulo y Remo'
      }
    ];
  }
}
