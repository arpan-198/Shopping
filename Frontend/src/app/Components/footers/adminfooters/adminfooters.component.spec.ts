import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfootersComponent } from './adminfooters.component';

describe('AdminfootersComponent', () => {
  let component: AdminfootersComponent;
  let fixture: ComponentFixture<AdminfootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
