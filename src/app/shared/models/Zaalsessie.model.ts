import {Wedstrijd} from "./Wedstrijd.model";
import {Team} from "./Team.model";

export type Zaalsessie = {
  UUID: string;
  isKlaar: boolean;
  Naam: string;
  created_at: Date;
  Wedstrijden: Wedstrijd[];
  Teams: Team[];
}
