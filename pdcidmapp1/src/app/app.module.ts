import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { UsersComponent } from './components/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'addUser', component: UsersComponent},
  {path: 'search/:keyword', component: UsersComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', redirectTo: '/users', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
