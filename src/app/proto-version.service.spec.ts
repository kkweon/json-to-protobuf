import { TestBed } from '@angular/core/testing'

import { ProtoVersionService } from './proto-version.service'

describe('ProtoVersionService', () => {
  let service: ProtoVersionService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ProtoVersionService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
