import { Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

export const routes: Routes = [
  {
    path:'', component:UserPageComponent
  },
  {
    path:'register', component:RegisterUserComponent
  }
];
