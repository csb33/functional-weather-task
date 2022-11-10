const Temp = (props) => {
  const temp = props.weathers.list[0].main.temp;

  console.log(temp, "TEMP");

  return (
    <>
      <div>
        <p>Temp: {Math.round([temp] - 273.15)} &deg;c</p>
      </div>
    </>
  );
};

export default Temp;
