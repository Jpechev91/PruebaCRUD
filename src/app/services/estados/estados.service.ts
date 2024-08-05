import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private API_SERVER = "http://localhost:8080/api/estado/"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEstados(): Observable<any> {
    return this.httpClient.get(this.API_SERVER)
  }
}
