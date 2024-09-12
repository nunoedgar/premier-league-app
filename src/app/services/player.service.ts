import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://ec2-15-236-39-183.eu-west-3.compute.amazonaws.com:8000/api/player'; // Alterar para o seu endpoint correto

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
