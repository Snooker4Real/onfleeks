import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(username: string, password: string): Promise<void | string> {
    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'azerty') {
            this.token.next('azertyui');
            res();
          } else {
            rej('Le nom d\'utilisateur et/ou le mot de passe est incorrect');
          }
        }, 300);
      }
    )
  }

  signout():Promise<void> {
    return new Promise<void>(
      (res,rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
