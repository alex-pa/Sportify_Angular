import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'account', 
        pathMatch: 'full',
    },
    {
        path: '',
        component: ProfileComponent,
        children: [
            { 
                path: 'account', 
                component: AccountComponent
            },
            { 
                path: 'settings', 
                component: SettingsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }