import { PossibleAnswer } from './possible-answer';

export class Question {
  constructor(
    public questionID: number,
    public question: string,
    public categoryType: string,
    public questionType: string,
    public attachment: string,
    public startcode: string,
    public possibleAnswers: PossibleAnswer[],
    public givenAnswer: string,
    public stateID: number,
  ) { }

}
