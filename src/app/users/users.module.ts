import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './user-list/user-list.component';
import {UserPreviewComponent} from './user-preview/user-preview.component';
import {UserService} from './user.service';

@NgModule({
  declarations: [UserListComponent, UserPreviewComponent],
  exports: [UserListComponent, UserPreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})

export class UsersModule {
}
