import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have JSON input <textarea /> with the default value', () => {
    expect(component.jsonTextField).toBeInstanceOf(FormControl)
    expect(component.jsonTextField.value).toBeTruthy()
  })

  it('should have parse JSON input to proto', (done) => {
    component.outputField$.subscribe((value) => {
      expect(value).toContain(`optional string name = 1;`)
      done()
    })
    component.jsonTextField.setValue(`{ "name": "Mo Kweon" }`)
  })
})
