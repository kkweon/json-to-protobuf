import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

let fixture
let component
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
  }))

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })
})
