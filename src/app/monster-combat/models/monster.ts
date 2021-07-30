import { AttackType } from './attack-type';
import { MonsterState } from './monster-state';

export interface Monster {
  id: number
  name: string
  attackOne: string
  attackOneCondition: string
  attackTwo: string
  attackTwoCondition: string
  attackThree: string
  attackThreeCondition: string
}
