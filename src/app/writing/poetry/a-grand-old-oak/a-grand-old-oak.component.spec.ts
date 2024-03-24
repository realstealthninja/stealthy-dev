import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGrandOldOakComponent } from './a-grand-old-oak.component';

describe('AGrandOldOakComponent', () => {
  let component: AGrandOldOakComponent;
  let fixture: ComponentFixture<AGrandOldOakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGrandOldOakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGrandOldOakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
