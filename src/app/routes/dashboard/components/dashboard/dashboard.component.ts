import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CdkDrag } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CdkDrag],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
