import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPublicationComponent } from './load-publication.component';

describe('LoadPublicationComponent', () => {
  let component: LoadPublicationComponent;
  let fixture: ComponentFixture<LoadPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
