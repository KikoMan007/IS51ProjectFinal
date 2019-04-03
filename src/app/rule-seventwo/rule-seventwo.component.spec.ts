import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSeventwoComponent } from './rule-seventwo.component';

describe('RuleSeventwoComponent', () => {
  let component: RuleSeventwoComponent;
  let fixture: ComponentFixture<RuleSeventwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleSeventwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSeventwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
