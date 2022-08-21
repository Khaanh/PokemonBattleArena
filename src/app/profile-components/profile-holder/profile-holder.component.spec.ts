import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHolderComponent } from './profile-holder.component';

describe('ProfileHolderComponent', () => {
  let component: ProfileHolderComponent;
  let fixture: ComponentFixture<ProfileHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
