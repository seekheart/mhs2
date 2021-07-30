import { Component, OnInit } from '@angular/core';
import { MonsterDataService } from './monster-data.service';
import { Monster } from './models/monster';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-monster-combat',
  templateUrl: './monster-combat.component.html',
  styleUrls: ['./monster-combat.component.scss']
})
export class MonsterCombatComponent implements OnInit {
  dataSource = new MatTableDataSource();
  monsterCombatData: Monster[] = [];
  displayedColumns: string[] = [
    'name',
    'attackOne',
    'attackOneCondition',
    'attackTwo',
    'attackTwoCondition',
    'attackThree',
    'attackThreeCondition'
  ]

  colorAttack: Map<string, string> = new Map<string, string>();


  constructor(private monsterDataService: MonsterDataService) {
  }

  ngOnInit(): void {
    this.monsterDataService.getData()
      .pipe(
        tap(m => this.dataSource.data = m),
        map(m => this.monsterCombatData = m)
      ).subscribe();
    this.colorAttack.set('power', '#ef476f');
    this.colorAttack.set('speed', '#118ab2');
    this.colorAttack.set('tech', '#06d6a0');
    this.colorAttack.set('none', '#ffffff');
  }

  findMonster($event: KeyboardEvent) {
    const monsterName = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = monsterName.trim().toLowerCase()
  }

  getAttackColor(atkType: string): string {
    return <string>this.colorAttack.get(atkType);
  }
}
