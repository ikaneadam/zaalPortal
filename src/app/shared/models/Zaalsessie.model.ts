import {Wedstrijd} from "./Wedstrijd.model";
import {Team} from "./Team.model";

export type Zaalsessie = {
  UUID: string;
  isKlaar: boolean;
  name: string;
  created_at: Date;
  wedstrijden: Wedstrijd[];
  teams: Team[];
}
