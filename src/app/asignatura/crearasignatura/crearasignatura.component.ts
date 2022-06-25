import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturaService } from '../asignatura.service';
import { Asignatura } from '../Asignatura';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crearasignatura',
  templateUrl: './crearasignatura.component.html',
  styleUrls: ['./crearasignatura.component.css']
})
export class CrearasignaturaComponent implements OnInit {
  
  [x: string]: any;
  
  titulo: string ="Registrar nueva escuela";
  asignatura: Asignatura = new Asignatura();
  
  constructor(private asignaturaService: AsignaturaService,
    private router: Router) { }

  ngOnInit(): void {
  }
    public crearAsignatura():void{
      this.asignaturaService.registrarAsignaturaService(this.asignatura).subscribe(
        
        Asignatura => {
          this.router.navigate(['/Asignatura'])
          Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
        })
    }   

}
