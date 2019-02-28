import { TestBed } from '@angular/core/testing';

import { CallLogFrmService } from './call-log-frm.service';

describe('CallLogFrmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallLogFrmService = TestBed.get(CallLogFrmService);
    expect(service).toBeTruthy();
  });
});
