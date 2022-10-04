const Country = (props) => {
  const country = props;
  const { name } = country;

  return (
    <div>{name}</div>
  );
};

export default Country;
