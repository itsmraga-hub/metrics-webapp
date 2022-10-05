import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';

import CountryComponent from '../CountryComponent';

it('<CountryComponent /> Renders Properly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <CountryComponent />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
