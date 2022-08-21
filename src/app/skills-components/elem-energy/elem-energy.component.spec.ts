import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemEnergyComponent } from './elem-energy.component';

describe('ElemEnergyComponent', () => {
  let component: ElemEnergyComponent;
  let fixture: ComponentFixture<ElemEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemEnergyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElemEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
