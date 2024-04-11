import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CdkDrag } from '@angular/cdk/drag-drop'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod';
import { PodService } from '../../../../services/pod.service';
import { GraphPodComponent } from '../graph-pod/graph-pod.component'
import { BasicPodComponent } from '../basic-pod/basic-pod.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CdkDrag, GraphPodComponent, BasicPodComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private podService:PodService) {

  }

  pods: (IBasicPod | IGraphPod | IPod)[] = this.podService.getPods()
}
