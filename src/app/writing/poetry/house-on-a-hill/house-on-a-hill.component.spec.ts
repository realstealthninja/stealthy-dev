import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOnAHillComponent } from './house-on-a-hill.component';

describe('HouseOnAHillComponent', () => {
  let component: HouseOnAHillComponent;
  let fixture: ComponentFixture<HouseOnAHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseOnAHillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseOnAHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
