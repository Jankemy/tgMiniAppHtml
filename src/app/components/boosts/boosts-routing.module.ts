import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoostsComponent } from './boosts.component';

const routes: Routes = [
  {
    path: '',
    component: BoostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoostsRoutingModule { }
