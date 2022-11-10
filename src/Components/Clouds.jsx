const Clouds = (props) => {
  const { description, icon } = props.weather;
  console.log(props.weather, "DESCRIPTION");

  return (
    <>
      <div>
        <p>{description}</p>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
        />
      </div>
    </>
  );
};

export default Clouds;
