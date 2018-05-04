import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UsersModule} from './users.module';
import {UserSearchComponent} from './user-search/user-search.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'search', component: UserSearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UsersModule
  ]
})

export class UsersRoutingModule {
}
