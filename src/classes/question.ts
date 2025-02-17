import {PossibleAnswer} from './possible-answer';

export class Question {
  constructor(
    public questionID: number,
    public question: string,
    public categoryType: string,
    public questionType: string,
    public attachment: string,
    public startCode: string,
    public possibleAnswers: PossibleAnswer[],
    public givenAnswers: string[],
    public stateID: number,
    public hasMultipleAnswers: boolean
  ) { }

}
