import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBrightStarComponent } from './big-bright-star.component';

describe('BigBrightStarComponent', () => {
  let component: BigBrightStarComponent;
  let fixture: ComponentFixture<BigBrightStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBrightStarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBrightStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
