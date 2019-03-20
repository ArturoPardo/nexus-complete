import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ShowListsComponent } from './show-lists/show-lists.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponent } from './board/board.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ShowListsComponent,
    RegisterViewComponent,
    ListComponent,
    NavbarComponent,
    BoardComponent,
    LoginViewComponent,
    AddNewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
