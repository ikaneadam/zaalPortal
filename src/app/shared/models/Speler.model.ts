import {Team} from "./Team.model";
import {Goal} from "./Goal.model";

export type Speler = {
  UUID: string;
  name: string;
  imageUrl?: string;
  //typeorm getrawquery limitaions
  imageurl?: string;
  teams: Team[]
  goals: string | Goal;
  wins: string
  loses: string
  draws: string
}
