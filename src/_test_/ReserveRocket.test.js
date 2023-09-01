import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReserveRocket from '../components/ReserveRocket';

test('ReserveRocket component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <ReserveRocket />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
