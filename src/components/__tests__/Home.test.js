import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

import Home from '../Home';

it('<Home /> Renders Properly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
