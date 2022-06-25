import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http'
import { URL_SERVICE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  api= URL_SERVICE

  constructor(
    private http:HttpClient,
  ) { }

    getEstudianteByEscuela(idescuela=2): Observable <any>  {
      console.log(this.http.get<any>(this.api+"/estudiante/listar?idescuela="+idescuela))

      return this.http.get<any>(this.api+"/estudiante/listar?idescuela="+idescuela)
     
    }
   
}
