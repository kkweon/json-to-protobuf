import { Injectable } from '@angular/core'
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProtoVersionService {

  private readonly _useProto3 = new BehaviorSubject<boolean>(true)
  readonly useProto3$ = this._useProto3.asObservable()

  constructor() {
  }

  get useProto3(): boolean {
    return this._useProto3.getValue()
  }

  toggleProtoVersion(): void {
    return this._useProto3.next(!this.useProto3)
  }
}
