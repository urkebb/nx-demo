import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@viber-bot/ui';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BlockUiComponent } from './block-ui/block-ui.component';
import { InputComponent } from './input/input.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule, ReactiveFormsModule, FormsModule],
  declarations: [
    CardComponent,
    SidebarComponent,
    BlockUiComponent,
    InputComponent,
    InputPasswordComponent,
    FormBuilderComponent,
  ],
  exports: [
    CardComponent, SidebarComponent, BlockUiComponent, FormsModule, ReactiveFormsModule, CommonModule, InputComponent, InputPasswordComponent, FormBuilderComponent
  ],
})
export class ComponentsModule { }
