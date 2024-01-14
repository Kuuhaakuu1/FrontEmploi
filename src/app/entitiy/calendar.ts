import { Activity } from './activity';

export class Calendar {
  constructor(
    public id: number,
    public title: string,
    public scheduledActivities: Activity[]
  ) {}
}
