import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ForumComponent } from 'src/app/forum/forum.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CourselistComponent } from 'src/app/courselist/courselist.component';

const routes: Routes = [
  {
    path : 'ContactUs',
    component : ContactusComponent
  },
  {
    path : 'SignIn',
    component : SigninComponent
  },
  {
    path : 'AboutUs',
    component : AboutComponent
  },
  {
    path : 'Forum',
    component : ForumComponent
  },
  {
    path : 'Home',
    component : HomeComponent
  },
  {
    path : 'CourseList',
    component : CourselistComponent
  },
  {
    path : '',
    redirectTo : '/Home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
