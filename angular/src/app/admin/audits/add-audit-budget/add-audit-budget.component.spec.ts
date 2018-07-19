import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuditBudgetComponent } from './add-audit-budget.component';

describe('AddAuditBudgetComponent', () => {
  let component: AddAuditBudgetComponent;
  let fixture: ComponentFixture<AddAuditBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuditBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuditBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
