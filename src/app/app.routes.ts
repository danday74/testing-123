import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./routes/dashboard/routes').then(mod => mod.dashboardRoutes)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
]
