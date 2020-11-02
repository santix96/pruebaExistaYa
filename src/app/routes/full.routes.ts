import { Routes, RouterModule } from '@angular/router';

export const FULL_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/hero-page/hero-page.module').then(m => m.HeroPageModule)
  }
];