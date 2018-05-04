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
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [UserListComponent, UserPreviewComponent, UsernamePipe, UserEditComponent, UserSearchComponent],
  exports: [UserListComponent, UserPreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputMaskModule,
    InputTextModule
  ],
  providers: [
    UserService
  ]
})

export class UsersModule {
}
