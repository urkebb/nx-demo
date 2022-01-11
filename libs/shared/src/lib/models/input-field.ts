import { FormGroup } from '@angular/forms';

export class InputField {
  id?: number;
  label?: string;
  class?: string;
  containerClass?: string;
  type?: string;
  placeholder?: string;
  formControlName?: string;
  formGroup?: FormGroup;
  formGroupName?: any;
  errorMessage?: string;
  dropdownOptions?: any;
  optionValue?: string;
  optionLabel?: string;
  fieldFormGroup?: string;

  // constructor(obj?: any) {
  //   if (obj !== null || obj !== undefined) {
  //     Object.assign(this, obj);
  //   }
  // }
}
