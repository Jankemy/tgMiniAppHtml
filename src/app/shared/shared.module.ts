import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { CutCoinComponent } from './cut-coin/cut-coin.component';
import { SwipeComponent } from './components/swipe/swipe.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    PreloaderComponent,
    CutCoinComponent,
    SwipeComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PreloaderComponent,
    CutCoinComponent,
    SwipeComponent,
    ProgressBarComponent,
  ]
})
export class SharedModule { }
