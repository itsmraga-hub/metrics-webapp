import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';

import Case from '../Case';

const coun = {
  country: {
    abbreviation: 'KE',
    id: 'Kenya',
    life_expectancy: '45',
  },
};
it('<Case /> Renders Properly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Case country={coun} />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
