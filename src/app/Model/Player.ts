export class Player {
    id: number;
    name: string;
    age: number;
    teamId: number;
    teamName: string;
  
    constructor(id: number, name: string, age: number, teamId: number, teamName: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.teamId = teamId;
      this.teamName = teamName;
    }
  }