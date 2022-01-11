
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MainLayoutComponent } from '@viber-bot/includes';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('@viber-bot/authentication').then((m) => m.AuthenticationModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@viber-bot/pages').then((m) => m.PagesModule),
      },
    ],
  },
  { path: "**", redirectTo: "auth" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
