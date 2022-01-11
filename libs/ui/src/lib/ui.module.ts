import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Primeng imports
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';





@NgModule({
  imports: [CommonModule, TooltipModule, InputTextModule, ButtonModule, ToastModule],
  exports: [TooltipModule, InputTextModule, ButtonModule, ToastModule],
  providers: [MessageService]
})
export class UiModule { }
