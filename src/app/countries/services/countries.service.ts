import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  serchCountryByAlphaCode( code: string ): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( error => {
          console.error(error);
          return of(null);
        })
      )
  }

  searchCapital( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError( error => {
          console.error(error);
          return of([]);
        })
      )
  }

  searchCountry( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError( error => {
          console.error(error);
          return of([]);
        })
      )
  }

  searchRegion( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      catchError( error => {
        console.error(error);
        return of([]);
      })
    )
  }
}
