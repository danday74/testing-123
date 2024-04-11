import { Component, input, InputSignal } from '@angular/core'
import { CdkDrag } from '@angular/cdk/drag-drop'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-basic-pod',
  standalone: true,
  imports: [CdkDrag, RouterLink],
  templateUrl: './basic-pod.component.html',
  styleUrl: './basic-pod.component.scss'
})
export class BasicPodComponent {
  pod: InputSignal<IPod | IBasicPod | IGraphPod> = input.required<IPod | IBasicPod | IGraphPod>()
}
