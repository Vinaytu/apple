import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPermissionGuard } from './guards/admin-permission.guard';
import { UserDeactivateGuard } from './guards/user-deactivate.guard';
import { AboutComponent } from './navbar/about/about.component';

import { AuthenticationComponent } from './navbar/authentication/authentication.component';
import { CreateAccountComponent } from './navbar/authentication/create-account/create-account.component';
import { LoginComponent } from './navbar/authentication/login/login.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { HomeComponent } from './navbar/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },

  {
    path: 'about', component:AboutComponent
  },

  {
    path: 'contact', component:ContactComponent
  },

  {
    path: 'authentication', component:AuthenticationComponent,
  

    children: [

        {
          path: 'login', component: LoginComponent, 
        },
        {
          path: 'create_account',component: CreateAccountComponent, 
        },

    ],
      
  },
  {
    path:'video',loadChildren:()=>import('./video/video.module').then(m=>m.VideoModule)

  },
  {
    path:'game',loadChildren:()=>import('./gamemodule/gamemodule.module').then(m=>m.GamemoduleModule)
  },


  {
    path: '**', component:NotFoundComponent
  },
  
];

@NgModule({

  
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
