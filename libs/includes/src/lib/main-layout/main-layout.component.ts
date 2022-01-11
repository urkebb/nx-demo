import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'viber-bot-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) { }

  sidebarVisibility = false;
  form: FormGroup = this.fb.group({
    lang: 'sr',
  });


  get transitionOptions() {
    return '300ms cubic-bezier(0, 0, 0.2, 1)';
  }

  ngOnInit(): void { }
}
