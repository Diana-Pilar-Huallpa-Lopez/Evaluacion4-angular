import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICE } from 'src/environments/environment';
import { Asignatura } from './Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  api = URL_SERVICE
  
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http : HttpClient) { }
  
  ListarAsignatura():Observable<any>{
    return this.http.get<any>(this.api+"/asignatura/listarAsignatura")
  }
  registrarAsignaturaService(asignatura:Asignatura):Observable<any>{
    return this.http.post(this.api+"/asignatura/registra",asignatura,{headers: this.httpHeaders})
  }

}

