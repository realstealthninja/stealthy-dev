import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStealthyDevComponent } from './why-stealthy-dev.component';

describe('WhyStealthyDevComponent', () => {
  let component: WhyStealthyDevComponent;
  let fixture: ComponentFixture<WhyStealthyDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyStealthyDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyStealthyDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
