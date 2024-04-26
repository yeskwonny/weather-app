import { ForecastDataType } from "../types/types";
import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import Tile from "./Tile";
import {
  getWindDirection,
  getPop,
  getHumidityValue,
  getVisibilityValue,
} from "../helper/helper";

type Props = {
  forecast: ForecastDataType;
};
function Weather({ forecast }: Props) {
  // getting current weather data
  const today = forecast.list[0];

  //get date from dt
  const getDate = function (dt: number): string {
    const date = new Date(dt * 1000);
    const formattedDate = date.toDateString();
    return formattedDate;
  };

  //get hour from dt
  const getHour = function (dt: number) {
    const date = new Date(dt * 1000);
    const hour = date.getHours();
    if (hour < 12) return hour + "AM";
    if (hour > 12) return hour + "PM";
  };

  // get Sunrise and sunset time
  const getTime = function (dt: number) {
    const date = new Date(dt * 1000);
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${hour < 12 ? `0${hour}` : `${hour}`}:${
      minute < 10 ? `0${minute}` : `${minute}`
    }`;
  };

  return (
    <div className="w-full md:grid grid-rows-4 grid-cols-2 items-center md:h-full">
      <section className="flex flex-col items-center md:row-span-3 ">
        <h1 className="font-black text-[#fbf2d5] text-[30px] text-center mt-5  transition duration-1000 ease-in-out flex-wrap  sm:text-[50px] md:text-[65px] ">
          {forecast ? forecast.name : "Loading"}
        </h1>
        <p className="text-sm text-[#fdc57b] sm:text-[16px]">
          {getDate(today.dt)}
        </p>
        <p className=" font-black text-[30px] text-[#fbf2d5]  sm:text-[50px]">
          {Math.floor(today.main.temp)}
          <sup>o</sup>
        </p>
        <p className="sm:text-[20px] text-[#fbf2d5]">
          {today.weather[0].main}, {today.weather[0].description}
        </p>
        <div className="sm:text-[18px] text-[#fbf2d5]">
          <span>
            L:{Math.floor(today.main.temp_min)} <sup>o</sup>
          </span>
          <span>
            H:{Math.ceil(today.main.temp_max)} <sup>o</sup>
          </span>
        </div>
      </section>
      <section className="mt-2 md:col-span-2 self-start">
        <div className="flex gap-1 bg-[#7fa99b] bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg overflow-x-scroll mx-auto md:overflow-x-auto md:w-[90%]">
          {forecast.list.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center text-center w-[50px] flex-shrink-0 mx-auto mt-2"
            >
              <p className="text-sm font-semibold text-[#fdc57b]">
                {getHour(item.dt)}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-[#fbf2d5]">
                {Math.floor(item.main.temp)}
                <sup>o</sup>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex mt-7 mx-auto justify-around flex-wrap mb-5 w-[300px] sm:w-[400px] md:grid col-start-2 gap-3 row-start-2 md:grid-cols-2">
        <div className="bg-[#fbf2d5] bg-opacity-90 backdrop-blur-ls rounded drop-shadow-lg w-[140px] flex flex-col items-center p-2">
          <Sunrise />
          <span>{getTime(forecast.sunrise)}</span>
        </div>
        <div className="bg-[#fbf2d5] bg-opacity-90 backdrop-blur-ls rounded drop-shadow-lg w-[140px] flex flex-col items-center p-2">
          <Sunset />
          <span>{getTime(forecast.sunset)}</span>
        </div>
        {/* wind */}
        <Tile
          title={"Wind"}
          icon={"wind"}
          info={`${today.wind.speed} km/h`}
          description={`${getWindDirection(today.wind.deg)},gust ${
            today.wind.gust
          } `}
        />

        <Tile
          title={"Feels Like"}
          icon={"feels"}
          info={`${Math.round(today.main.feels_like)}°`}
          description={
            today.main.feels_like < today.main.temp ? "colder" : "warmer"
          }
        />
        <Tile
          title={"Humidity"}
          icon={"humidity"}
          info={`${today.main.humidity} %`}
          description={`${getHumidityValue(today.main.humidity)}`}
        />
        <Tile
          title={"Precipitation"}
          icon={"pop"}
          info={`${today.pop}%`}
          description={`${getPop(today.pop)} clouds ${today.clouds.all}%`}
        />
        <Tile
          title={"Visibility"}
          icon={"visibility"}
          info={`${today.visibility}km`}
          description={getVisibilityValue(today.visibility)}
        />
        <Tile
          title={"Pressure"}
          icon={"pressure"}
          info={`${today.main.pressure}hpa`}
          description={`${
            Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
          }`}
        />
      </section>
    </div>
  );
}

export default Weather;
