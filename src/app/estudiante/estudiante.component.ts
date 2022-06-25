import { Component, OnInit } from '@angular/core';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  
})
export class EstudianteComponent implements OnInit {

  estudianteList: any;

  constructor(private estudianteService:EstudianteService) { 

    //this.estudianteList= ListaEstudiantes;
    //console.log(this.estudianteList)
  }

  ngOnInit(): void {
    this.listarEstudianteByEscuela(2);
  }

  listarEstudianteByEscuela(idescuela=2){
    //this.estudianteList.getEstudianteByEscuela(idescuela).subscribe((res:any)=>{
      this.estudianteService.getEstudianteByEscuela(idescuela).subscribe((res:any)=>{
      this.estudianteList= res.data;
      console.log("data"+this.estudianteList)
    })
    
  }

}
