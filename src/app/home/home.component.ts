import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { JsonProtoAdapterService } from '../json-proto-adapter.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jsonTextField = new FormControl('')
  outputField$: Observable<string>
  constructor(private jsonProtoAdapterService: JsonProtoAdapterService) {}

  ngOnInit(): void {
    this.outputField$ = this.jsonTextField.valueChanges.pipe(
      map(value => {
        try {
          return this.jsonProtoAdapterService.getProtoDefinitionFromJson(value)
        } catch (e) {
          return e
        }
      }),
    )
  }
}
