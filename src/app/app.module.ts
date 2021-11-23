import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';
import { MainComponent } from './share/main/main.component';
import { CoursesComponent } from './share/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ErrorPageComponent,
    NavbarComponent,
    LoginPageComponent,
    SidebarComponent,
    MainComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
