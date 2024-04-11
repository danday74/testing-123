import { TPodType } from '../ttypes/t-pod-type'

export interface IPod {
  id: string
  top: number
  left: number
  zIndex: number
  active: boolean
  type: TPodType
}

export interface IBasicPod extends IPod {
  label: string
  stat1: number
  stat2: number
  text: string
}

export interface IGraphPod extends IPod {}
