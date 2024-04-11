import { TPodType } from '../ttypes/t-pod-type'

export interface IPod {
  id: string
  top: number
  left: number
  zIndex: number
  active: boolean
  type: TPodType
  label: string
}

export interface IBasicPod extends IPod {
  stat1: number
  stat2: number
  text: string
}

export interface IGraphPod extends IPod {}
