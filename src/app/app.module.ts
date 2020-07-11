import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ScullyLibModule } from '@scullyio/ng-lib'
import { HomeComponent } from './home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ReactiveFormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
