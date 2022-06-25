import { Component, OnInit } from '@angular/core';
import { EscuelaService } from './escuela.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {

  listaEscuelas:any;
  constructor(private escuelasService: EscuelaService) { }

  ngOnInit(): void {
    this.listarEscuelas();
  }
  listarEscuelas(){
    this.escuelasService.listarEscuelas().subscribe((res:any)=>{
      this.listaEscuelas=res.data;
    }
    )
  }

}
