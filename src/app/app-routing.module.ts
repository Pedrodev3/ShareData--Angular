import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataRoutes } from './data';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/data/parent',
    pathMatch: 'full',
  },
  ...DataRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
