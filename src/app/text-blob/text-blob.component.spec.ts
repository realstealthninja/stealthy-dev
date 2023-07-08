import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlobComponent } from './text-blob.component';

describe('TextBlobComponent', () => {
  let component: TextBlobComponent;
  let fixture: ComponentFixture<TextBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
