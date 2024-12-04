import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BlogPageComponent } from './home/blog-page/blog-page.component';
import { PostblogComponent } from './postblog/postblog.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
 { path:'signin', component:SigninComponent},
 { path:'signup', component:SignupComponent},
 { path:'home', component:HomeComponent},
 {path:'blog',component:BlogPageComponent},
 {path:'postblog',component:PostblogComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
