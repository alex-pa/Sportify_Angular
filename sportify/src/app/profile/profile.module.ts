import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [ProfileComponent, SidebarComponent, AccountComponent, SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
