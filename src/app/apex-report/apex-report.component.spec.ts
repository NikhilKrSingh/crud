import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexReportComponent } from './apex-report.component';

describe('ApexReportComponent', () => {
  let component: ApexReportComponent;
  let fixture: ComponentFixture<ApexReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
