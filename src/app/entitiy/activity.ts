export class Activity {
  constructor(
    public id: number,
    public name: string,
    public beginDate: Date,
    public endDate: Date
  ) {}
}
enum ActivityType {
  Cours,
  Evenement,
  Reunion,
}
