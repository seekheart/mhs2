import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCombatComponent } from './monster-combat.component';

describe('MonsterCombatComponent', () => {
  let component: MonsterCombatComponent;
  let fixture: ComponentFixture<MonsterCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterCombatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
