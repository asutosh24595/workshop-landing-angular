import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerMainComponent } from './lower-main.component';

describe('LowerMainComponent', () => {
  let component: LowerMainComponent;
  let fixture: ComponentFixture<LowerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
