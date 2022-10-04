import { useSelector } from 'react-redux';

const Country = (props) => {
  const country = props;
  const { name } = country;

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>{name}</div>
  );
};

export default Country;
