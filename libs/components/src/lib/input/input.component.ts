import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { InputField } from '@viber-bot/shared';

@Component({
  selector: 'viber-bot-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() options: InputField | any = null;
  @Input() customFormGroup: any;
  errors: any = {};
  specificFormGroup!: FormGroup;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit(): void {
    if (
      this.options.fieldFormGroup ||
      this.options.fieldFormGroup == ''
    ) {
      this.specificFormGroup = this.getSpecificFormGroup(
        this.options.fieldFormGroup
      );
    } else {
      this.specificFormGroup = this.customFormGroup;
    }
    if (this.options.fieldFormGroup == '') {
      this.specificFormGroup = this.customFormGroup;
    }
    // this.specificFormGroup = this.fieldOptions.fieldFormGroup !== '' ? this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup) : this.customFormGroup;
  }

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    if (
      this.customFormGroup &&
      this.options.fieldFormGroup !== undefined
    ) {
      this.errors =
        this.customFormGroup.controls[this.options.formControlName].errors;
    } else if (
      this.customFormGroup &&
      (this.options.fieldFormGroup ||
        this.options.fieldFormGroup == '')
    ) {
      this.errors =
        formGroup.controls[this.options.formControlName].errors;
    } else {
      this.errors =
        formGroup.controls[this.options.formControlName].errors;
    }
  }

  getSpecificFormGroup(formGroupPath: string) {
    return <FormGroup>this.customFormGroup.get(formGroupPath);
  }
}
