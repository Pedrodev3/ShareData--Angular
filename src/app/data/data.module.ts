import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent';
import { ChildComponent } from './child';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class DataModule { }
