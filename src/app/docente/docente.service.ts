import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  api = URL_SERVICE
  constructor(private http :HttpClient) { }

  ListarDocente():Observable<any>{
    return this.http.get<any>(this.api+"/docente/listarDocente")
  }
}
