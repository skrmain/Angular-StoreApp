import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'shared-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  // @Input() message: any;
  message: string | undefined | null;
  // @Output() newMessage = new EventEmitter();
  constructor(private messageService: MessageService) {
    this.messageService.message.subscribe({
      next: (msg: string) => {
        console.log('MSG: ', msg);
        this.message = msg;
      },
    });
  }

  ngOnInit() {}

  clearMessage() {
    this.message = null;
    // this.newMessage.emit(this.message);
  }
}
