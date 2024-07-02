import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { CutCoinComponent } from './cut-coin/cut-coin.component';
import { SwipeComponent } from '../components/swipe/swipe.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InviteComponent } from '../components/invite/invite.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ContentLayoutComponent,
    PreloaderComponent,
    CutCoinComponent,
    // SwipeComponent,
    ProgressBarComponent,
    // InviteComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentLayoutComponent,
    PreloaderComponent,
    CutCoinComponent,
    // SwipeComponent,
    ProgressBarComponent,
    // InviteComponent,
    LoginComponent,
  ]
})
export class SharedModule { }
