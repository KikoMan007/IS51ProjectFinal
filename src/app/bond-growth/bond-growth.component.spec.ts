import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondGrowthComponent } from './bond-growth.component';

describe('BondGrowthComponent', () => {
  let component: BondGrowthComponent;
  let fixture: ComponentFixture<BondGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
