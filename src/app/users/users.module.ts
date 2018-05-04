import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './user-list/user-list.component';
import {UserPreviewComponent} from './user-preview/user-preview.component';
import {UserService} from './user.service';
import {UsernamePipe} from './username.pipe';
import {UserEditComponent} from './user-edit/user-edit.component';
import {InputMaskModule, InputTextModule} from 'primeng/primeng';
import {UserSearchComponent} from './user-search/user-search.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [UserListComponent, UserPreviewComponent, UserDetailComponent, UsernamePipe, UserEditComponent, UserSearchComponent],
  exports: [UserListComponent, UserPreviewComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputMaskModule,
    InputTextModule,
    RouterModule
  ],
  providers: [
    UserService
  ]
})

export class UsersModule {
}
