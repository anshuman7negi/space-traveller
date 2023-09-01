import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MyProfile from '../components/profile';

const mockStore = configureMockStore();

describe('MyProfile Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      missions: {
        missions: [
          { mission_id: '1', mission_name: 'Mission 1', reserved: true },
          { mission_id: '2', mission_name: 'Mission 2', reserved: false },
        ],
      },
      rockets: {
        rockets: [
          { id: '1', name: 'Rocket 1', reserved: true },
          { id: '2', name: 'Rocket 2', reserved: false },
        ],
      },
    };

    store = mockStore(initialState);
  });

  test('MyProfile component renders correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
