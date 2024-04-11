import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./routes/dashboard/routes').then(mod => mod.dashboardRoutes)
  },
  {
    path: 'other',
    loadChildren: () => import('./routes/other/routes').then(mod => mod.otherRoutes)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
]
