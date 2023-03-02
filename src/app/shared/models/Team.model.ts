import {Zaalsessie} from "./Zaalsessie.model";
import {Speler} from "./Speler.model";

export type Team = {
  UUID: string;
  zaalSessie: Zaalsessie;
  name: string;
  spelers: Speler[];
  wins: number;
  loses: number;
  draws: number;
}
