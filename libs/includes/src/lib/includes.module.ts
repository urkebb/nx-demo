import { ToastModule } from 'primeng/toast';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ComponentsModule } from '@viber-bot/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ToastModule,
    FormsModule, ComponentsModule],
  declarations: [
    MainLayoutComponent,
  ],
  exports: [
    MainLayoutComponent
  ],
})
export class IncludesModule { }
