import { TestBed } from '@angular/core/testing'

import { JsonProtoAdapterService } from './json-proto-adapter.service'

describe('JsonProtoAdapterService', () => {
  let service: JsonProtoAdapterService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(JsonProtoAdapterService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should convert JSON to Protocol Buffer', () => {
    const input = `{ "message": "Hello World" }`
    const expected = `optional string message = 1;`
    expect(service.getProtoDefinitionFromJson(input)).toContain(expected)
  })
})
