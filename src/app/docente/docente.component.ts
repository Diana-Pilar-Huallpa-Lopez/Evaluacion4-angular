import { Component, OnInit } from '@angular/core';
import { DocenteService } from './docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  listaDocente : any;
  constructor(private docenteservice : DocenteService) { }

  ngOnInit(): void {
    this.listarDocente();
  }
  listarDocente(){
    this.docenteservice.ListarDocente().subscribe((res:any)=>{
      this.listaDocente = res.data;
    }
    )
  }

}
