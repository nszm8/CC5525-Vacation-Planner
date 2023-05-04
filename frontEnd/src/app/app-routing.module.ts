import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
  path: 'home',
  component: HomeComponent,

  },
  {
  path: 'register',
  component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,

    },
    {
    path: 'contact',
    component: ContactComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
