import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../Model/Player';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, TagModule, DropdownModule, ButtonModule, InputTextModule, FormsModule, DialogModule ],
  providers: [MessageService],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent implements OnInit {

  players : Player[] = [];

  clonedPlayers: { [s: string]: Player } = {};

  showCreatePlayerDialog : boolean = false;
  newPlayer:Player = new Player(undefined, '', undefined); ;

  constructor(private playerService : PlayerService){}

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() : void {
    this.playerService.getAllPlayers().subscribe(data =>{
      //console.log(data);
      this.players = data;
    })
  }

  createPlayer(player: Player) : void {
    this.playerService.createPlayer(player).subscribe(data =>{
      this.getAllPlayers();
      this.showCreatePlayerDialog=false;
    })
  }

  onRowEditInit(player: Player) {
    this.clonedPlayers[player.id as number] = { ...player };
}

  onRowEditSave(player: Player) {  
    console.log("==MÉTODO  onRowEditSave==")  
    this.playerService.updatePlayer(player).subscribe(res =>{
      console.log("==UPDATED PLAYER==");
      console.log(res);
    })
  }

  onRowEditCancel(player: Player, index: number) {
      this.players[index] = this.clonedPlayers[player.id as number];
      delete this.clonedPlayers[player.id as number];
  }

  showCreatePlayer(){
    this.newPlayer = new Player(undefined, '', undefined);    
    this.showCreatePlayerDialog = true;
  }

}
