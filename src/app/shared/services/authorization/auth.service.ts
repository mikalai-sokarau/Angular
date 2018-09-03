import { Injectable } from '@angular/core';
import { UserInterface } from '../../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logIn(user: UserInterface) {
    window.localStorage.setItem(user.id, JSON.stringify(user));
  }

  logOut(user: UserInterface) {
    window.localStorage.removeItem(user.id);
  }

  isAuthenticated(user: UserInterface) {
    return !!localStorage.getItem(user.id);
  }

  getUserInfo(id: string) {
    return JSON.parse(localStorage.getItem(id)).login;
  }
}
