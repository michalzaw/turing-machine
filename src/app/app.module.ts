import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { StateArrayComponent } from './components/state-array/state-array.component';
import { TapeComponent } from './components/tape/tape.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolsComponent,
    StateArrayComponent,
    TapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
