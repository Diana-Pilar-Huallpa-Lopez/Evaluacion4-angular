import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  listaAsignaturas : any;
  constructor(private asignaturaservice : AsignaturaService) { }

  ngOnInit(): void {
    this.listarAsignatura();
  }
  listarAsignatura(){
    this.asignaturaservice.ListarAsignatura().subscribe((res:any)=>{
      this.listaAsignaturas = res.data;
    }
    )
  }
}



