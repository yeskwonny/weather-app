import { ChangeEvent } from "react";
import { TbWorldSearch } from "react-icons/tb";
import { OptionType } from "../types/types";

type Props = {
  city: string;
  options: [];
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: (option: OptionType) => void;
  handleOnSubmit: () => void;
};
function Search({
  city,
  options,
  handleOnChange,
  handleOnClick,
  handleOnSubmit,
}: Props) {
  return (
    <section className="relatvie flex gap-3 items-center justify-center mx-auto mt-5">
      <input
        type="text"
        className="bg-transparent border-b-2 w-[300px] border-[#7fa99b] focus:border-4 focus:border-solid focus:border-l-transparent text-[#fbf2d5]"
        onChange={handleOnChange}
        value={city}
      ></input>
      <ul className="absolute top-[97px]  text-[#7fa99b] rounded-b-md ">
        {options.map((option: OptionType, index: number) => (
          <li key={index} className="text-sm sm:text-[20px] sm:mb-2">
            <button
              className="cursor-pointer  hover:underline underline-offset-4"
              onClick={() => handleOnClick(option)}
            >
              {option.name},{option.state === "undefined" ? "" : option.state}{" "}
              {option.country}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="font-bold text-[#7fa99b]"
        onClick={() => handleOnSubmit()}
      >
        <TbWorldSearch size="30" />
      </button>
    </section>
  );
}

export default Search;
