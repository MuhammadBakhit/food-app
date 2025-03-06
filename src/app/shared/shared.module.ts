import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from '../core/interceptors/global.interceptor';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';


@NgModule({
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalInterceptor,
        multi: true
      }
    ],
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeleteItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    RouterModule,
    DeleteItemComponent,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
