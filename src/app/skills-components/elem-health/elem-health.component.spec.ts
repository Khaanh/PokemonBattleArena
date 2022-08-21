import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemHealthComponent } from './elem-health.component';

describe('ElemHealthComponent', () => {
  let component: ElemHealthComponent;
  let fixture: ComponentFixture<ElemHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElemHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElemHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
