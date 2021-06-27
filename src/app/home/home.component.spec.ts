import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './home.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import {
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent, MatFormField, MatLabel],
        imports: [
          ReactiveFormsModule,
          MatInputModule,
          BrowserAnimationsModule,
          MatSnackBarModule,
          MatIconModule,
        ],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have JSON input <textarea /> with the default value', (done) => {
    component.outputField$.subscribe((value) => {
      expect(value).toBeTruthy()
      done()
    })
    expect(component.jsonTextField).toBeInstanceOf(FormControl)
    expect(component.jsonTextField.value).toBeTruthy()
  })

  it('should have parse JSON input to proto', (done) => {
    component.outputField$.subscribe((value) => {
      expect(value).toContain(`string name = 1;`)
      done()
    })
    component.jsonTextField.setValue(`{ "name": "Mo Kweon" }`)
  })
})
