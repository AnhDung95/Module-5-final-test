import { Injectable } from '@angular/core';
import {Tour} from '../model/tour';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Tour[]> {
    console.log('abc');
    return this.http.get<Tour[]>(API_URL + '/tuors');
  }

  saveTour(tour): Observable<Tour> {
    return this.http.post<Tour>(API_URL + '/tuors', tour);
  }

  findById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${API_URL}/tuors/${id}`);
  }

  updateTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${API_URL}/tuors/${id}`, tour);
  }

  deleteTour(id: number): Observable<Tour> {
    return this.http.delete<Tour>(`${API_URL}/tuors/${id}`);
  }
}
