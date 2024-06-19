import { Routes } from '@angular/router';
import { addGithubPath } from '../../../environments/environment';
export const content: Routes = [
    // { path: '', redirectTo: `${addGithubPath}swipe`, pathMatch: 'full' },
    // { path: addGithubPath, redirectTo: `${addGithubPath}swipe`, pathMatch: 'full' },
    { path: `${addGithubPath}swipe`, loadChildren: () => import('../../components/swipe/swipe.module').then(m => m.SwipeModule) },
    { path: `${addGithubPath}invite`, loadChildren: () => import('../../components/invite/invite.module').then(m => m.InviteModule) },
    { path: `${addGithubPath}boosts`, loadChildren: () => import('../../components/boosts/boosts.module').then(m => m.BoostsModule) },
    { path: `${addGithubPath}earn`, loadChildren: () => import('../../components/earn/earn.module').then(m => m.EarnModule) },
    
    { path: '', redirectTo: `${addGithubPath}swipe`, pathMatch: 'full' },

];
