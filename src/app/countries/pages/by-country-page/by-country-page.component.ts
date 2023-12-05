import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries:  Country[] = [];
  public initTerm:     string = "";

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initTerm = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string) {
    this.countriesService.searchCountry( term )
      .subscribe( countries => this.countries = countries);
  }
}
