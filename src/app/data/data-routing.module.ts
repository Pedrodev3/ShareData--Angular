import { SiblingComponent } from './sibling/sibling.component';
import { Routes } from '@angular/router';
import { ParentComponent } from './parent';
import { ChildComponent } from './child';

export const DataRoutes: Routes = [
  {
    path: 'data',
    redirectTo: 'data/parent'
  },
  {
    path: 'data/parent',
    component: ParentComponent
  },
  {
    path: 'data/child',
    component: ChildComponent
  },
  // {
  //   path: 'data/sibling',
  //   component: SiblingComponent
  // }
];

