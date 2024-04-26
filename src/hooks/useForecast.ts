import { ChangeEvent, useState } from "react";
import { OptionType, ForecastDataType } from "../types/types";

function useForecast() {
  const [city, setCity] = useState("");
  const [options, setOptions] = useState<[]>([]);
  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
  const [forecast, setForecast] = useState<ForecastDataType | null>(null);

  //fetch data//
  // get option list with city name
  const getCityOption = async function (value: string) {
    try {
      const rawData = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=4&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const parsedData = await rawData.json();
      setOptions(parsedData);
    } catch (error) {
      console.error(error);
    }
  };

  //get forecastdata with selected city
  const getWeatherData = async function (selectedCity: OptionType) {
    try {
      const rawData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          selectedCity.lat
        }&lon=${selectedCity.lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      const parsedData = await rawData.json();
      console.log(parsedData);

      // manipulating forecast data
      const weatherData = {
        ...parsedData.city,
        list: parsedData.list.slice(0, 18),
      };
      console.log(weatherData);
      setForecast(weatherData);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(forecast);

  // handle input change and city option list
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setCity(value);
    if (!value) return;
    getCityOption(value);
  }

  //handle choosing a city option and update selected city
  function handleOnClick(city: OptionType) {
    setSelectedCity(city);
    setCity(`${city.name}, ${city.state ? city.state : ""} ${city.country}`);
    setOptions([]);
  }

  //handleSubmit
  function handleOnSubmit() {
    if (!selectedCity) return;
    getWeatherData(selectedCity);
    setSelectedCity(null);
    setCity("");
  }

  return {
    city,
    options,
    selectedCity,
    forecast,
    handleOnChange,
    handleOnClick,
    handleOnSubmit,
  };
}
export default useForecast;
