import { Injectable } from '@angular/core';
import { Monster } from './models/monster';
import { AttackType } from './models/attack-type';
import { MonsterState } from './models/monster-state';
import { Observable, of } from 'rxjs';
import { data } from './models/monster-data';
@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {
  // TODO add real monstie data
  private monsterData: Monster[] = data
  constructor() { }

  getData(): Observable<Monster[]> {
    return of(this.monsterData);
  }
}
