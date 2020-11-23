import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypesComponent } from './add-types.component';

describe('AddTypesComponent', () => {
  let component: AddTypesComponent;
  let fixture: ComponentFixture<AddTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
