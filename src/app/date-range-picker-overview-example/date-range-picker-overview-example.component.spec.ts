import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickerOverviewExampleComponent } from './date-range-picker-overview-example.component';

describe('DateRangePickerOverviewExampleComponent', () => {
  let component: DateRangePickerOverviewExampleComponent;
  let fixture: ComponentFixture<DateRangePickerOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickerOverviewExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePickerOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
