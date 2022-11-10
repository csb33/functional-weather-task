import Clouds from "./Clouds";
import Temp from "./Temp";

////Using state from parent so PROPS must be used.
const WeatherData = (props) => {
  const weathers = props.weathers;
  console.log(weathers, "WEATHER");

  return (
    //// Prop drilling
    <div className="weatherContainer">
      <Temp weathers={weathers} />
      <Clouds weathers={weathers} />
    </div>
  );
};

export default WeatherData;
