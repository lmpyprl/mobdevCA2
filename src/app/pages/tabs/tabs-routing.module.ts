import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'Search',
          children: [
            {
              path: '',
              loadChildren: () => import('../teams/teams.module').then( m => m.TeamsPageModule)
            },
            {
              path: 'preview',
              loadChildren: () => import('../team-details/team-details.module').then( m => m.TeamDetailsPageModule)
            }
          ]
        },
        {
          path: 'Saved',
          children: [
            {
              path: '',
              loadChildren: () => import('../players/players.module').then( m => m.PlayersPageModule)
            },             
            {
              path: 'preview',
              loadChildren: () => import('../team-details/team-details.module').then( m => m.TeamDetailsPageModule)
            }
          ]
        },
        {
          path: 'Ireland',
          children: [
            {
              path: '',
              loadChildren: () => import('../player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
            },             
            {
              path: 'preview',
              loadChildren: () => import('../team-details/team-details.module').then( m => m.TeamDetailsPageModule)
            }
          ]
        }
        
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/Search',
      pathMatch: 'full'
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}


