export class FormField {
  group?: FormField[];
  controlType?: string;
  colSize?: string;
  options?: {
    id?: number;
    rows?: number | string;
    label?: string;
    class?: string;
    containerClass?: string;
    type?: string;
    dropdownOptions?: any;
    optionValue?: string;
    optionLabel?: string;
    placeholder?: string;
    fieldFormGroup?: string;
    formControlName?: string;
    errorMessage?: string;
    dateType?: any;
  };
}
