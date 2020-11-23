import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.SigninComponent } from './admin.signin.component';

describe('Admin.SigninComponent', () => {
  let component: Admin.SigninComponent;
  let fixture: ComponentFixture<Admin.SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.SigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
