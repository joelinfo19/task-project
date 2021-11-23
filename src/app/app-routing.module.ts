import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
