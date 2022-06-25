import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  title: string = " WELCOME TO THE CLASES TEACHER"
  constructor() { }

  ngOnInit(): void {
  }

}
