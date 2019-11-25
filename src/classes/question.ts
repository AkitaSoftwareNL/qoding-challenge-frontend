export class Question {
  constructor(
    public questionID: number,
    public questionType: string,
    public question: string,
    public attachment: string,
    public stateID: number,
    public givenAnswer: string,
    public possibleAnswer: []
  ) {
  }

}
