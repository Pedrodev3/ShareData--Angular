import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
4º Fourth Way Utilizando service para transportar dados entre quaisquer componentes, sem essa de pai e filho nesse caso
*/

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
