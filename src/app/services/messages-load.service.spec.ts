import { TestBed, inject } from '@angular/core/testing';

import { MessagesLoadService } from './messages-load.service';

describe('MessagesLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesLoadService]
    });
  });

  it('should be created', inject([MessagesLoadService], (service: MessagesLoadService) => {
    expect(service).toBeTruthy();
  }));
});
