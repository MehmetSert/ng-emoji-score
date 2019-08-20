import { TestBed } from '@angular/core/testing';

import { NgEmojiScoreService } from './ng-emoji-score.service';

describe('NgEmojiScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgEmojiScoreService = TestBed.get(NgEmojiScoreService);
    expect(service).toBeTruthy();
  });
});
