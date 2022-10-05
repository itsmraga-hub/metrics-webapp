import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

import CasesContainer from '../CasesContainer';

it('<CasesContainer /> Renders Properly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CasesContainer cases={[]} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
