import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the import path as needed
import Rockets from '../components/pages/Rockets';

test('Rockets component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
