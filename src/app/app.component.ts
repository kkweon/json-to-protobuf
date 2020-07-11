import { Component } from '@angular/core'

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
}
