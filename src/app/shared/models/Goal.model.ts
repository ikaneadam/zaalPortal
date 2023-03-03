import {Speler} from "./Speler.model";

export type Goal = {
  UUID: string;
  scoorder: string | Speler;
  created_at: Date;
}
