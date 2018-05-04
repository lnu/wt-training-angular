import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UsersModule} from './users.module';
import {UserSearchComponent} from './user-search/user-search.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'search', component: UserSearchComponent},
  {path: 'detail/:userId', component: UserDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    UsersModule
  ]
})

export class UsersRoutingModule {
}
