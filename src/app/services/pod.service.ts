import { Injectable } from '@angular/core';
import { IBasicPod, IGraphPod, IPod } from '../interfaces/i-pod';
import { podsData } from '../data/pods-data';

@Injectable({
  providedIn: 'root'
})
export class PodService {

  private pods: (IBasicPod | IGraphPod | IPod)[] = podsData

  getPods() {
    return this.pods;
  }
}
