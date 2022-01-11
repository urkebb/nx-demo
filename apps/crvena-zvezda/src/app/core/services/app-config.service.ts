import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { setConfig } from '../reducers/config.reducer';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {

  appName = 'Crvena Zvezda'

  constructor(
    private http: HttpClient,
    private store: Store<{ config: any }>
  ) { }

  load(): Promise<any> {
    // Wait to load languages and then load app
    return new Promise<any>((resolve) => {
      // this.getAppSettings('languages').subscribe((response: any) => {
      //   localStorage.setItem('languages', JSON.stringify(response));

      //   this.store.dispatch(setConfig({ langs: response }));

      //   resolve({});
      // });
      this.store.dispatch(setConfig({
        langs: [
          { name: "Srpski", code: 'sr', },
          { name: "English", code: 'en', },
        ]
      }))
      resolve({})
    });
  }


  getAppSettings(settingsField: string) {
    return this.http.get(
      `${ environment.apiUrl }/api/app-options/${ settingsField }`
    );
  }
}
