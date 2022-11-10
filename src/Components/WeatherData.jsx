import Clouds from "./Clouds";
import Temp from "./Temp";
import Daytime from "./Daytime";
import { useSelector } from "react-redux";

////Using state from parent so PROPS must be used.

const WeatherData = () => {
  const state = useSelector((state) => state);
  const { list } = state.weathers;

  return (
    //// Prop drilling
    <div className="weatherContainer">
      {list.map((weather, index) => {
        ////FIZZBUZZ
        if (index % 8 === 0) {
          return (
            <div key={weather.dt}>
              <Temp main={weather.main} />
              <Clouds weather={weather.weather[0]} />
              <Daytime dt={weather.dt} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default WeatherData;
