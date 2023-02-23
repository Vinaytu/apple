import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { AuthenticationComponent } from './navbar/authentication/authentication.component';
import { NgxColorsModule } from 'ngx-colors';
import { LoginComponent } from './navbar/authentication/login/login.component';
import { CreateAccountComponent } from './navbar/authentication/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildComponent } from './child/child.component';
import { PositiveNumDirective } from './Directive/positive-num.directive';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { PipePipe } from './pipes/pipe.pipe';
import { ReactiveComponent } from './reactive/reactive.component';
import { CommonModule } from '@angular/common';
import { AdminPermissionGuard } from './guards/admin-permission.guard';
import { UserDeactivateGuard } from './guards/user-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent,
    NotFoundComponent,
    ChildComponent,
    PositiveNumDirective,
    PipePipe,
    ReactiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxColorsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    

  ],
  providers: [AdminPermissionGuard,UserDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
