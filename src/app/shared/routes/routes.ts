import { Routes } from '@angular/router';
export const content: Routes = [
    { path: '', redirectTo: 'tgMiniAppHtml/swipe', pathMatch: 'full' },
    { path: 'tgMiniAppHtml/', redirectTo: 'tgMiniAppHtml/swipe', pathMatch: 'full' },
    { path: 'tgMiniAppHtml/swipe', loadChildren: () => import('../../components/swipe/swipe.module').then(m => m.SwipeModule) },
    { path: 'tgMiniAppHtml/invite', loadChildren: () => import('../../components/invite/invite.module').then(m => m.InviteModule) },
    { path: 'tgMiniAppHtml/boosts', loadChildren: () => import('../../components/boosts/boosts.module').then(m => m.BoostsModule) },
    { path: 'tgMiniAppHtml/earn', loadChildren: () => import('../../components/earn/earn.module').then(m => m.EarnModule) },

];
