import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeAtGbotComponent } from './my-time-at-gbot.component';

describe('MyTimeAtGbotComponent', () => {
  let component: MyTimeAtGbotComponent;
  let fixture: ComponentFixture<MyTimeAtGbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTimeAtGbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTimeAtGbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
