import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemDefenseComponent } from './elem-defense.component';

describe('ElemDefenseComponent', () => {
  let component: ElemDefenseComponent;
  let fixture: ComponentFixture<ElemDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemDefenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElemDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
