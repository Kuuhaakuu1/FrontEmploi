import { Calendar } from './calendar';
import { User } from './user';

export class Student extends User {
  constructor(
    id: number,
    username: string,
    mail: string,
    password: string,
    public firstName: string,
    public familyName: string,
    public phone: string,
    public address: string,
    public calendar: Calendar
  ) {
    super(id, username, mail, password); // Pass the required arguments to the super() call
  }
}
