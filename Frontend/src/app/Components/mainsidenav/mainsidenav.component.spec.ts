import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsidenavComponent } from './mainsidenav.component';

describe('MainsidenavComponent', () => {
  let component: MainsidenavComponent;
  let fixture: ComponentFixture<MainsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
