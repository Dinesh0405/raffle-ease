import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleDashboardComponent } from './raffle-dashboard.component';

describe('RaffleDashboardComponent', () => {
  let component: RaffleDashboardComponent;
  let fixture: ComponentFixture<RaffleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffleDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
