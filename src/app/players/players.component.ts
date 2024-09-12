import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../Model/Player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {

  players : Player[] = [];

  constructor(private playerService : PlayerService){}

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() : void {
    this.playerService.getAllPlayers().subscribe(data =>{
      console.log(data);
      this.players = data;
    })
  }

}
