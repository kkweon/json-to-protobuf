import { TestBed, async, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { MatMenu, MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormField, MatLabel } from '@angular/material/form-field'

let fixture
let component
describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatMenuModule,
          MatIconModule,
          ReactiveFormsModule,
          MatToolbarModule,
        ],
        declarations: [AppComponent, MatFormField, MatLabel],
      }).compileComponents()

      fixture = TestBed.createComponent(AppComponent)
      component = fixture.componentInstance
    }),
  )

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })
})
