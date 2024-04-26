import Header from "./Components/Header";
import Search from "./Components/Search";
import useForecast from "./hooks/useForecast";
import Weather from "./Components/Weather";

function App() {
  const {
    city,
    options,
    forecast,
    handleOnChange,
    handleOnClick,
    handleOnSubmit,
  } = useForecast();
  return (
    <div className="h-screen overflow-y-scroll">
      <Header />

      {forecast ? (
        <>
          <Weather forecast={forecast} />
        </>
      ) : (
        <Search
          city={city}
          options={options}
          handleOnChange={handleOnChange}
          handleOnClick={handleOnClick}
          handleOnSubmit={handleOnSubmit}
        />
      )}
    </div>
  );
}
//TODO HELPER FUNCTION AND IMAGE ICON
export default App;
