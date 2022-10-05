import renderer from 'react-test-renderer';

import Header from '../Header';

it('<Header /> Renders Properly', () => {
  const tree = renderer.create(
    <Header />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
