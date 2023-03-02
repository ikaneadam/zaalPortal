import {Speler} from "./Speler.model";

export type Goal = {
  UUID: string;
  Scoorder: string | Speler;
  created_at: Date;
}
