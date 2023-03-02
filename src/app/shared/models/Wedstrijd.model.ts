import {Zaalsessie} from "./Zaalsessie.model";
import {Team} from "./Team.model";
import {Goal} from "./Goal.model";

export type Wedstrijd = {
  UUID: string;
  zaalSessie: Zaalsessie;
  thuisClub: Team;
  uitClub: Team;
  thuisGoals: Goal[];
  uitGoals: Goal[];
}
