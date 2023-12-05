import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries:  Country[] = [];
  public regions: Region[] = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
  ];
  public isLoading: boolean = false;
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.isLoading = false;
        this.countries = countries;
      });
  }
}
