import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { JsonProtoAdapterService } from '../json-proto-adapter.service'
import { Observable, of, merge } from 'rxjs'
import { map } from 'rxjs/operators'
import { ProtoVersionService } from '../proto-version.service'
import { Clipboard } from '@angular/cdk/clipboard'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jsonTextField = new FormControl(`{
  "name": "Mo Kweon",
  "age": 18
}`)

  @ViewChild('output')
  output: ElementRef<HTMLTextAreaElement>

  outputField$: Observable<string>

  constructor(
    private jsonProtoAdapterService: JsonProtoAdapterService,
    private protoVersionService: ProtoVersionService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.outputField$ = merge(
      of(this.jsonTextField.value),
      this.jsonTextField.valueChanges,

      // when useProto3$ changes, the output also needs to be updated.
      // use the current textField value.
      this.protoVersionService.useProto3$.pipe(
        map(() => this.jsonTextField.value),
      ),
    ).pipe(
      map((value) => {
        try {
          if (this.protoVersionService.useProto3) {
            return this.jsonProtoAdapterService.getProto3DefinitionFromJson(
              value,
            )
          }
          return this.jsonProtoAdapterService.getProtoDefinitionFromJson(value)
        } catch (e) {
          return e
        }
      }),
    )
  }

  onCopyClick(): void {
    if (this.clipboard.copy(this.output.nativeElement.value)) {
      this.snackBar.open('Copied to the clipboard', 'OK', { duration: 1000 })
    } else {
      this.snackBar.open('Failed to copy to clipboard', 'OK', {
        duration: 1000,
      })
    }
  }
}
