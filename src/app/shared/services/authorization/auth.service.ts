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

  logOut(id: string) {
    window.localStorage.removeItem(id);
  }

  isAuthenticated(id: string) {
    return !!localStorage.getItem(id);
  }

  getUserInfo(id: string) {
    return JSON.parse(localStorage.getItem(id)).login;
  }
}
