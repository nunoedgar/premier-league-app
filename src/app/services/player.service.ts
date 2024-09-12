import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../Model/Player';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = environment.apiUrl + '/player';

  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  updatePlayer(player: Player): Observable<any> {    
    const url = `${this.apiUrl}/${player.id}`;  
    return this.http.put(url, player);
  }

  createPlayer(player: Player): Observable<any> {         
    return this.http.post(this.apiUrl, player);
  }
}
