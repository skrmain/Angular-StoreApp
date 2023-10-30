import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message = new EventEmitter();
  messages: string[] = [];

  constructor() {}

  send(msg: string) {
    this.messages.push(msg);
    this.message.emit(msg);
  }

  clear() {
    // TODO:
  }
}
