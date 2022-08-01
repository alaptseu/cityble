export interface CityInfo {
    city: string;
    lat: number;
    lng: number;
    country: string;
    capital: string;
    population: number | null;
  }

  export interface City {
    city: string;
    population: number | null;
  }

  export interface CityCoutry {
    city: string;
    country: string;
  }