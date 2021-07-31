import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  
  {
    path:'', 
    redirectTo:'/tabs/avatar',
    pathMatch: 'full'

  },
  
  {
    path: '',
    component: TabsPage,
  
  children:[
    {
      path:'avatar',
      loadChildren:()=>import('../avatar/avatar.module').then(m=>m.AvatarPageModule)

    },
    {
      path:'loading',
      loadChildren:()=>import('../loading/loading.module').then(m=>m.LoadingPageModule)

    },
    {
      path:'card',
      loadChildren:()=>import('../card/card.module').then(m=>m.CardPageModule)

    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
