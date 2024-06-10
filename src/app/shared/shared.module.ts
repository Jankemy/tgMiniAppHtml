import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { CutCoinComponent } from './cut-coin/cut-coin.component';


@NgModule({
  declarations: [
    PreloaderComponent,
    CutCoinComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PreloaderComponent,
    CutCoinComponent
  ]
})
export class SharedModule { }
