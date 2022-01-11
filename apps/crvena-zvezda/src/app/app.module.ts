// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ComponentsModule } from '@viber-bot/components';
import { UiModule } from '@viber-bot/ui';
import { AppRoutingModule } from './app.routing.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { configReducer } from './core/reducers/config.reducer';
import { AppConfigService } from './core/services/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function configFactory(config: AppConfigService) {
  return () => config.load();
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ config: configReducer }),],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
