import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonsterCombatRoutingModule } from './monster-combat-routing.module';
import { MonsterCombatComponent } from './monster-combat.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MonsterCombatComponent
  ],
  imports: [
    CommonModule,
    MonsterCombatRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MonsterCombatModule { }
