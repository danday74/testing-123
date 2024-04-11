import { Component, input, InputSignal, OnInit } from '@angular/core';
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod';
import { PodService } from '../../../../services/pod.service';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent implements OnInit {
  id: InputSignal<string> = input.required<string>()
  // @ts-ignore
  pod: IPod;
  pods: (IBasicPod | IGraphPod | IPod)[] = this.podService.getPods()
  constructor(private podService:PodService) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.pod = this.pods.find( (pod: IPod) => {
      return pod.id === this.id()
    })
    
  }
}
