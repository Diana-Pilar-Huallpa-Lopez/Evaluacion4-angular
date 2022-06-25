import { Component, OnInit } from '@angular/core';
import { escuela } from '../Escuela';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  titulo: string ="Registrar nueva escuela";
  escuela: escuela = new escuela();

  constructor() { }

  ngOnInit(): void {
  }

  public crearEscuela():void{
    console.log("cliked");
    console.log(this.escuela);
  }

}
