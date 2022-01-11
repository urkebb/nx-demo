import { FormField } from '@viber-bot/shared';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthFieldsService {
  loginFields: FormField[] = [
    {
      colSize: 'col-12',
      controlType: 'input',
      options: {
        label: 'email',
        type: 'text',
        containerClass: 'mb-0',
        formControlName: 'email',
      },
    },
    {
      colSize: 'col-12',
      controlType: 'input-password',
      options: {
        label: 'password',
        type: 'text',
        containerClass: 'mb-0',
        formControlName: 'password',
      },
    },
  ];

  forgotPassFields: FormField[] = [
    {
      colSize: 'col-12',
      controlType: 'input',
      options: {
        label: 'email',
        type: 'text',
        containerClass: 'mb-0',
        formControlName: 'email',
      },
    },
  ];

  // constructor(/* public translate: TranslateService */) { }
}
