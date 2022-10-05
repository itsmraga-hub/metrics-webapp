import renderer from 'react-test-renderer';

import SearchBar from '../Search';

it('<SearchBar /> Renders Properly', () => {
  const tree = renderer.create(
    <SearchBar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
