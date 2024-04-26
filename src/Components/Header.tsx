import { TiWeatherSunny } from "react-icons/ti";

function Header() {
  return (
    <div className="flex text-[#fbf2d5] font-bold p-3 text-sm">
      <h1>WEATHER APP</h1>
      <TiWeatherSunny />
    </div>
  );
}

export default Header;
