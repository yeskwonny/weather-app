//type for city for options
export type OptionType = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
};
//type for weather data
export type ForecastDataType = {
  dt: number;
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          description: string;
          icon: string;
          main: string;
        }
      ];
      wind: {
        deg: number;
        gust: number;
        speed: number;
      };
      pop: number;
      clouds: { all: number };
      visibility: number;
    }
  ];
};
