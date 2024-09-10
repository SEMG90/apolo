import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSecondComponent } from './slide-second.component';

describe('SlideSecondComponent', () => {
  let component: SlideSecondComponent;
  let fixture: ComponentFixture<SlideSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
