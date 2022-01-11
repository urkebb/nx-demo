import { Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomUtils } from '@viber-bot/shared';

@Component({
  selector: 'viber-bot-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnDestroy {
  /**
   * @decription
   * Form builder is a component that works by passing it the json configuration
   * for the formand it itself creates the entire layout of the form and all the fields.
   * More about form builder system you can find here:
   * https://martinstefanovic.github.io/#/developer
   */

  /**
   * * General
   * @CustomUtils Global utility
   * @appConfig App config from ngrx store
   * @subscriptions Subscriptions array
   */
  CustomUtils = CustomUtils;
  appConfig: any;
  subscriptions: Subscription[] = [];
  /**
   * * Inputs
   * @form This is locale form for one language
   * @mainForm This is main FormGroup
   * @fields All form fields
   * @styleClass Css classes for main grid container
   * @multiLang Whether the form has multiple languages or not
   */
  @Input() form!: FormGroup;
  @Input() mainForm!: FormGroup;
  @Input() fields: any;
  @Input() styleClass!: string;
  @Input() multiLang = false;

  constructor(private fb: FormBuilder, private store: Store<{ config: any }>) {
    /**
     * Get config from ngrx store
     */
    this.subscriptions.push(
      store.select('config').subscribe((res) => {
        this.appConfig = res;
      })
    );
  }

  /* ====================================
  *              LIFECYCLES
  ======================================= */

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
