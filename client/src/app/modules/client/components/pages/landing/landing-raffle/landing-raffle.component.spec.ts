import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRaffleComponent } from './landing-raffle.component';

describe('LandingRaffleComponent', () => {
  let component: LandingRaffleComponent;
  let fixture: ComponentFixture<LandingRaffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingRaffleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingRaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
