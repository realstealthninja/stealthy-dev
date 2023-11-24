import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InabilityToCompleteComponent } from './inability-to-complete.component';

describe('InabilityToCompleteComponent', () => {
  let component: InabilityToCompleteComponent;
  let fixture: ComponentFixture<InabilityToCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InabilityToCompleteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InabilityToCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
