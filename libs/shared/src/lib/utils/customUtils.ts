import { environment } from './../../../../../apps/crvena-zvezda/src/environments/environment';
import { FormArray, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

export class CustomUtils {

  constructor(public store: Store<{ config: any }>) {

  }

  static getFormField(formGroup: FormGroup, formField: string) {
    return formGroup.get(formField) as FormArray;
  }

  static getFormArray(form: FormGroup, arrayName: string) {
    return form.get(arrayName) as FormArray;
  }

  static getLocale(formGroup: FormGroup) {
    return <FormGroup>formGroup.get(`locale`);
  }

  static getLangFormGroup(formGroup: FormGroup, langCode: string) {
    return <FormGroup>formGroup.get(`locale.${ langCode }`);
  }

  static createDropdownData(responseArray: any[]): any[] {
    const dropdownArray: any[] = [];

    responseArray.forEach((currentItem) => {
      dropdownArray.push({
        name: currentItem.name,
        code: currentItem._id,
      });
    });

    return dropdownArray;
  }

  static patchAttachments(image: any) {
    const newImagePath = image?.path.split('\\').join('/');

    return {
      originalFile: null,
      imageLocalUrl: `${ environment.mediaUrl }${ newImagePath }`,
      fileName: image?.filename,
    };
  }


  static createFilterTags(tags: any[]) {

    return [
      { name: 'global.all', code: 'all' },
      ...tags
    ]
  }

}
