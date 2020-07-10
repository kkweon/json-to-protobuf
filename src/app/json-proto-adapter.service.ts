import { Injectable } from '@angular/core'
import toJsonSchema from 'to-json-schema'
import toProtobuf from 'jsonschema-protobuf'

@Injectable({
  providedIn: 'root',
})
export class JsonProtoAdapterService {
  constructor() {}

  getProtoDefinitionFromJson(input: string): string {
    const obj = JSON.parse(input)
    const jsonSchema = toJsonSchema(obj)
    jsonSchema.name = 'Root'
    return toProtobuf(JSON.stringify(jsonSchema))
  }
}
