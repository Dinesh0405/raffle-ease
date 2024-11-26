import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleLandingComponent } from './raffle-landing.component';

describe('RaffleLandingComponent', () => {
  let component: RaffleLandingComponent;
  let fixture: ComponentFixture<RaffleLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
