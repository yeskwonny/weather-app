import Feels from "./Icons/Feels";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";
import Visibility from "./Icons/Visibility";
import Wind from "./Icons/Wind";
import Humidity from "./Icons/Humidity";

type Props = {
  title: string;
  description: string;
  info: string;
  icon: "wind" | "feels" | "humidity" | "visibility" | "pressure" | "pop";
};

// icons object : bring icon depends on props
const icons = {
  wind: Wind,
  feels: Feels,
  pop: Pop,
  pressure: Pressure,
  visibility: Visibility,
  humidity: Humidity,
};

function Tile({ title, info, icon, description }: Props) {
  const Icon = icons[icon];
  return (
    <article className="w-[140px] h-auto bg-[#fbf2d5] bg-opacity-70 backdrop-blur-ls rounded drop-shadow-lg mt-4 p-1 ">
      <div className="flex items-center gap-1">
        <Icon />
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p>{info}</p>
      <span className="text-sm">{description}</span>
    </article>
  );
}
export default Tile;
