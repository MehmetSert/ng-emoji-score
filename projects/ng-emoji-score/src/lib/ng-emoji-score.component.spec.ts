import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEmojiScoreComponent } from './ng-emoji-score.component';

describe('NgEmojiScoreComponent', () => {
  let component: NgEmojiScoreComponent;
  let fixture: ComponentFixture<NgEmojiScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEmojiScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEmojiScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
