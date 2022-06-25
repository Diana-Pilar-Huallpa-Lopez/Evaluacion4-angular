import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsignaturaComponent } from "./asignatura/asignatura.component";
import { CrearasignaturaComponent } from "./asignatura/crearasignatura/crearasignatura.component";
import { DocenteComponent } from "./docente/docente.component";
import { CrearComponent } from "./escuela/crear/crear.component";
import { EscuelaComponent } from "./escuela/escuela.component";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes=[
    {
        path:'',
        component: InicioComponent
    },
    {
        path:'estudiante',
        component: EstudianteComponent
    },
    {
        path:'escuela',
        component: EscuelaComponent
    },
    {
        path:'asignatura',
        component:  AsignaturaComponent
    },
    {
        path:'docente',
        component:  DocenteComponent
    },
    {
        path:'escuela/form',
        component: CrearComponent
    },
    {
        path:'asignatura/form',
        component:CrearasignaturaComponent
    }
   
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRountingModule{}


