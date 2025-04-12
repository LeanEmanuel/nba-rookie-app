import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from "../../models/api-response";

@Injectable({providedIn: 'root'})
export class ApiService {
  private baseUrl = 'https://api.balldontlie.io/v1/players';

  constructor(private http: HttpClient) {
  }

  /**
   * Fetches a paginated list of NBA players.
   * @param page - The page number to fetch.
   */
  getPlayers(page: number = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}?page=${page}&per_page=25`, {
      headers: {
        'Authorization': '1e94dc0c-1e68-43ed-9d8f-9cf9bc13f532'
      }
    });
  }
}
