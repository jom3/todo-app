import { Routes } from '@angular/router';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { TaskDetailsPageComponent } from './pages/task-details-page/task-details-page.component';
import { RegisterTaskPageComponent } from './pages/register-task-page/register-task-page.component';
import { RegisterSubtaskPageComponent } from './pages/register-subtask-page/register-subtask-page.component';

export const routes: Routes = [
  {
    path:'', component:TaskPageComponent
  },
  {
    path:'register', component:RegisterTaskPageComponent
  },
  {
    path:':id', component:TaskDetailsPageComponent
  },
  {
    path:':id/register', component: RegisterSubtaskPageComponent
  }
];
