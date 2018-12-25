import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SigninComponent } from './signin/signin.component';
import { ForumComponent } from './forum/forum.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ContentTypeInterceptor } from 'src/app/common/interceptors/content-type-interceptor';
import { HomePageService } from 'src/app/service/homepage-service/homepage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,

    SigninComponent,
    ForumComponent,
    CourselistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppRoutingModule,ContentTypeInterceptor,
    {provide:HTTP_INTERCEPTORS, useClass : ContentTypeInterceptor, multi:true},
  HomePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
