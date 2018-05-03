import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UsersModule} from './users.module';

const routes: Routes = [
  {path: '', component: UserListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UsersModule
  ]
})

export class UsersRoutingModule {
}
