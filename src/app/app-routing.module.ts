import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FULL_ROUTES} from './routes/full.routes';
import {FullLayoutComponent} from './layouts/fullLayouts/full-layout/full-layout.component'

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: FULL_ROUTES,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
