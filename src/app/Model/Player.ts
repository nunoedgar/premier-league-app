export class Player {
    id: number | undefined;
    name: string | undefined;
    age: number | undefined;
    teamId: number | undefined;
    teamName: string | undefined;
  
    constructor(id: number | undefined, name: string | undefined, age: number | undefined, teamId?: number | undefined, teamName?: string | undefined) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.teamId = teamId;
      this.teamName = teamName;
    }
  }