import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.SignupComponent } from './admin.signup.component';

describe('Admin.SignupComponent', () => {
  let component: Admin.SignupComponent;
  let fixture: ComponentFixture<Admin.SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
