import { Component } from '@angular/core'
import { ProtoVersionService } from './proto-version.service'
import { Observable } from 'rxjs'

enum Theme {
  light = 'app-theme',
  dark = 'app-dark-theme',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme: Theme = Theme.dark
  useProto3$: Observable<boolean>

  constructor(private readonly protoVersionService: ProtoVersionService) {
    this.useProto3$ = this.protoVersionService.useProto3$
  }

  isDarkTheme(): boolean {
    return this.theme === Theme.dark
  }

  onChange(): void {
    if (this.isDarkTheme()) {
      this.theme = Theme.light
    } else {
      this.theme = Theme.dark
    }
  }

  toggleProtoVersion(): void {
    this.protoVersionService.toggleProtoVersion()
  }
}
