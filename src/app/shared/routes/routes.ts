import { Routes } from '@angular/router';
export const content: Routes = [
    { path: '', redirectTo: 'swipe', pathMatch: 'full' },
    { path: 'swipe', loadChildren: () => import('../../components/swipe/swipe.module').then(m => m.SwipeModule) },
    { path: 'invite', loadChildren: () => import('../../components/invite/invite.module').then(m => m.InviteModule) },
    { path: 'boosts', loadChildren: () => import('../../components/boosts/boosts.module').then(m => m.BoostsModule) },
    { path: 'earn', loadChildren: () => import('../../components/earn/earn.module').then(m => m.EarnModule) },

];
