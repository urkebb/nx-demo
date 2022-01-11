import { ToastModule } from 'primeng/toast';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ComponentsModule } from '@viber-bot/components';
import { UiModule } from '@viber-bot/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule, UiModule, ComponentsModule, ToastModule
  ]
})
export class AuthenticationModule { }
