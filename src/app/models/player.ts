
import { Team } from './team';

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string | null;
  weight: string | null;
  jersey_number?: string;
  college?: string;
  country?: string;
  draft_year?: number;
  draft_round?: number;
  draft_number?: number;
  team: Team;
}




