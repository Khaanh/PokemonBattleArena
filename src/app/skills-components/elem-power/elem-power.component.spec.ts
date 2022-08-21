import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemPowerComponent } from './elem-power.component';

describe('ElemPowerComponent', () => {
  let component: ElemPowerComponent;
  let fixture: ComponentFixture<ElemPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemPowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElemPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
