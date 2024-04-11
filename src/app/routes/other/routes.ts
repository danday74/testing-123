import { Route } from '@angular/router'
import { OtherComponent } from './components/other/other.component'
 
export const otherRoutes: Route[] = [
  {
    path: ':id',
    component: OtherComponent
  }
]