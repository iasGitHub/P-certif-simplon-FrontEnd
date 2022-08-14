import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommentPublicationComponent } from './view-comment-publication.component';

describe('ViewCommentPublicationComponent', () => {
  let component: ViewCommentPublicationComponent;
  let fixture: ComponentFixture<ViewCommentPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommentPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommentPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
