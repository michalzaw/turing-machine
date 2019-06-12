import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { StateArrayComponent } from './components/state-array/state-array.component';
import { TapeComponent } from './components/tape/tape.component';
import { GradientButtonComponent } from './components/gradient-button/gradient-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolsComponent,
    StateArrayComponent,
    TapeComponent,
    GradientButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
