import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadreFormularioComponent } from './padre-formulario/padre-formulario.component';
import { HijoListaComponent } from './hijo-lista/hijo-lista.component';
import { PadreListaComponent } from './padre-lista/padre-lista.component';
import { HijoFormularioComponent } from './hijo-formulario/hijo-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreFormularioComponent,
    HijoListaComponent,
    PadreListaComponent,
    HijoFormularioComponent
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
