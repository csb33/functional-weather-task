const Daytime = (props) => {
  const { dt } = props;
  return new Date(dt * 1000).toLocaleDateString();
};

export default Daytime;
