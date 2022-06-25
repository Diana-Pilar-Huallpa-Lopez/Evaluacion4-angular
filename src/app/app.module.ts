import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { AppRountingModule } from './app-routing.module';
import { EscuelaComponent } from './escuela/escuela.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { DocenteComponent } from './docente/docente.component';
import { CrearComponent } from './escuela/crear/crear.component';
import { FormsModule } from '@angular/forms';
import { CrearasignaturaComponent } from './asignatura/crearasignatura/crearasignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudianteComponent,
    InicioComponent,
    EscuelaComponent,
    AsignaturaComponent,
    DocenteComponent,
    CrearComponent,
    CrearasignaturaComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRountingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
