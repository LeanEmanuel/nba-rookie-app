import {Player} from './player';

export interface ApiResponse {
  data: Player[];
  meta: {
    next_cursor?: number;
    per_page: number;
  };
}
