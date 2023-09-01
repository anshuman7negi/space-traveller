import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MissionButton from '../components/MissionButton';

const mockStore = configureMockStore();

describe('MissionButton Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('MissionButton component renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MissionButton id="123" reserved={false} />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
