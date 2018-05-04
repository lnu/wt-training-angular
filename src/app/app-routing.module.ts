import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first/first.component';

const routes: Routes = [
  {path: 'FirstComponent', component: FirstComponent},
  {path: 'SecondModule', loadChildren: './second/second.module#SecondModule'},
  {path: 'Users', loadChildren: './users/users-routing.module#UsersRoutingModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
