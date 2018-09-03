import { UserInterface } from './user-interface';

export default class implements UserInterface {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public login: string,
    public token: string
  ) {}
}
