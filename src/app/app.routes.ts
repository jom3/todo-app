import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path:'', component:HomePageComponent, loadChildren:()=>import('./home/home.routes').then(r=>r.routes)
  },
  {
    path:'404', component: NotFoundPageComponent
  },
  {
    path:'**', redirectTo:'404'
  }
];
