import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterCombatComponent } from './monster-combat.component';

const routes: Routes = [
  {
    path: "monsters", component: MonsterCombatComponent
  },
  {
    path: "**", component: MonsterCombatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterCombatRoutingModule { }
