import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsLakesideComponent } from './stars-lakeside.component';

describe('StarsLakesideComponent', () => {
  let component: StarsLakesideComponent;
  let fixture: ComponentFixture<StarsLakesideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsLakesideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsLakesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
