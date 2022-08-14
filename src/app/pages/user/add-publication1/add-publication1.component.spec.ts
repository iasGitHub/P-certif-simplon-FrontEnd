import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublication1Component } from './add-publication1.component';

describe('AddPublication1Component', () => {
  let component: AddPublication1Component;
  let fixture: ComponentFixture<AddPublication1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublication1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPublication1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
