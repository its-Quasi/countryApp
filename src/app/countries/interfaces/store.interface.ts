import { Country } from "./country"

export interface KeyValueCountries {
  key : string // term of search countries
  countries : Country[] // countries match to term
}


export interface MapCountriesData {
  bycapital : KeyValueCountries
  byregion  : KeyValueCountries
  bycountry  : KeyValueCountries
}
