import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed/feed.component';
import { MainPageComponent } from './front-page/main-page/main-page.component';
import { JoinFormComponent } from './join-form/join-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'join', component: JoinFormComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'schedule', component: ScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
