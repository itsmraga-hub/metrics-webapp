import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

import Menu from '../Menu';

it('<Menu /> Renders Properly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Menu />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
