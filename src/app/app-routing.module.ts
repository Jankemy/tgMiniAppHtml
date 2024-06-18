import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/content-layout/content-layout.component';
import { content } from './shared/routes/routes';

const mainRoutes: Routes = [
    {
        path: '',
        component: ContentLayoutComponent,
        children: content
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
