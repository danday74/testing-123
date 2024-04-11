import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatOption, MatSelect } from '@angular/material/select'
import { IBasicPod, IGraphPod, IPod } from '../../../../interfaces/i-pod';
import { PodService } from '../../../../services/pod.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private podService:PodService) {

  }

  pods: (IBasicPod | IGraphPod | IPod)[] = this.podService.getPods()

}
