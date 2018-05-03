import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './user-list/user-list.component';
import {UserPreviewComponent} from './user-preview/user-preview.component';
import {UserService} from './user.service';
import {UsernamePipe} from './username.pipe';

@NgModule({
  declarations: [UserListComponent, UserPreviewComponent, UsernamePipe],
  exports: [UserListComponent, UserPreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})

export class UsersModule {
}
