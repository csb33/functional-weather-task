import Clouds from "./Clouds";
import Temp from "./Temp";
import Daytime from "./Daytime";

////Using state from parent so PROPS must be used.
const WeatherData = (props) => {
  const { list } = props.weathers;

  return (
    //// Prop drilling
    <div className="weatherContainer">
      {list.map((weather, index) => {
        ////FIZZBUZZ
        if (index % 8 === 0) {
          return (
            <>
              <Temp main={weather.main} />
              <Clouds weather={weather.weather[0]} />
              <Daytime dt={weather.dt} />
            </>
          );
        }
      })}
    </div>
  );
};

export default WeatherData;
