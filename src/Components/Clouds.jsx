const Clouds = (props) => {
  const description = props.weathers.list[0].weather[0].description;
  console.log(description, "DESCRIPTION");

  const image = props.weathers.list[0].weather[0].icon;
  console.log(image, "ICON");

  return (
    <>
      <div>
        <p>{description}</p>
        <img
          src={`"http://openweathermap.org/img/w/${props.weathers.list[0].weather[0].icon}.png"`}
          alt={description}
        />
      </div>
    </>
  );
};

export default Clouds;
