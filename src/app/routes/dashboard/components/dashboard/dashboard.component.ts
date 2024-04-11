import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CdkDrag } from '@angular/cdk/drag-drop'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod';
import { PodService } from '../../../../services/pod.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CdkDrag],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private podService:PodService) {

  }

  pods: (IBasicPod | IGraphPod | IPod)[] = this.podService.getPods()
}
