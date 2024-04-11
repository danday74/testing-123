import { Component, input, InputSignal } from '@angular/core'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod'

@Component({
  selector: 'app-basic-pod',
  standalone: true,
  imports: [],
  templateUrl: './basic-pod.component.html',
  styleUrl: './basic-pod.component.scss'
})
export class BasicPodComponent {
  pod: InputSignal<IPod | IBasicPod | IGraphPod> = input.required<IPod | IBasicPod | IGraphPod>()
}
