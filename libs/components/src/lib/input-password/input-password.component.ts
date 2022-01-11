import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'viber-bot-input-password',
  templateUrl: './input-password.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputPasswordComponent {
  /**
   * * General
   * @errors Form control errors
   * @isPassShown Show/hide password
   */
  errors: any;
  isPassShown = false;
  /**
   * * Inputs
   * @options Configuration for this form field
   * @customFormGroup Used when you want to use this component without form-builder
   */
  @Input() options: any;
  @Input() customFormGroup: any;

  constructor(private controlContainer: ControlContainer) { }

  /* ====================================
  *                HELPERS
  ======================================= */

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    if (this.customFormGroup) {
      this.errors =
        this.customFormGroup.controls[this.options.formControlName].errors;
    } else {
      this.errors = formGroup.controls[this.options.formControlName].errors;
    }
  }

  togglePassShow() {
    this.isPassShown = !this.isPassShown;
  }
}
