import { Component, input, InputSignal } from '@angular/core'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod'
import { CdkDrag } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-graph-pod',
  standalone: true,
  imports: [
    CdkDrag
  ],
  templateUrl: './graph-pod.component.html',
  styleUrl: './graph-pod.component.scss'
})
export class GraphPodComponent {
  pod: InputSignal<IPod | IBasicPod | IGraphPod> = input.required<IPod | IBasicPod | IGraphPod>()
}
