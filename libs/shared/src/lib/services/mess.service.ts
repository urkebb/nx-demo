import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessService {
  constructor(private messageService: MessageService) { }

  addSuccess(mess: {
    severity: string;
    title: string;
    detail: string;
    sticky?: boolean;
  }) {
    this.messageService.add({
      key: 'br',
      severity: mess.severity,
      summary: mess.title,
      detail: mess.detail,
      sticky: mess.sticky,
    });
  }

  addWarn(mess: {
    severity: string;
    title: string;
    detail: string;
    sticky?: boolean;
  }) {
    this.messageService.add({
      key: 'br-warn',
      severity: mess.severity,
      summary: mess.title,
      detail: mess.detail,
      sticky: mess.sticky,
    });
  }

  addError(mess: {
    severity: string;
    title: string;
    detail: string;
    sticky?: boolean;
  }) {
    this.messageService.add({
      key: 'br-error',
      severity: mess.severity,
      summary: mess.title,
      detail: mess.detail,
      sticky: mess.sticky,
    });
  }

  clearErrors() {
    this.messageService.clear('br-error');
  }
}
