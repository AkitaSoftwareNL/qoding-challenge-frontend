export class Participant {
  constructor(
              public participantId: number,
              public firstname: string,
              public insertion: string,
              public lastname: string,
              public email: string,
              public phonenumber: bigint) {}
}
