
import {Player} from './player';

/**
 * Represents the API response structure for a paginated list of players.
 */
export interface ApiResponse {
  data: Player[];
  meta: {
    next_cursor?: number;
    per_page: number;
  };
}
