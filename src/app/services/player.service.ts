import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://localhost:8000/api/player';

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
