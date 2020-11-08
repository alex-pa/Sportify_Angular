import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinFormComponent } from './join-form/join-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)
  },
  { 
    path: 'login', 
    component: LoginFormComponent
  },
  { 
    path: 'join', 
    component: JoinFormComponent
  },
  { 
    path: 'feed', 
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  { 
    path: 'schedule', 
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
