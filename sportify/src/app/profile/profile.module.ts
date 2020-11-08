import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { ElementsModule } from '../elements/elements.module';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent, 
    SidebarComponent, 
    AccountComponent, 
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    ProfileRoutingModule
  ],
  exports: []
})
export class ProfileModule { }
