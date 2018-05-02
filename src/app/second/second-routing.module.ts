import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstlazyComponent } from './firstlazy/firstlazy.component';

const routes: Routes = [
  { path: '', component: FirstlazyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[
    FirstlazyComponent
  ]
})
export class SecondRoutingModule { }
