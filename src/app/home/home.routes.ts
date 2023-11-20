import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'user', loadChildren:()=>import('../user/user.routes').then(r=>r.routes)
  },
  {
    path:'task', loadChildren:()=>import('../task/task.routes').then(r=>r.routes)
  },
];
