import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mission from '../components/Mission';

test('Mission component renders correctly', () => {
  const missionProps = {
    id: 'mission-123',
    missionName: 'Sample Mission',
    description: 'A sample mission description.',
    highlights: true,
    reserved: false,
  };

  const tree = renderer.create(
    <Provider store={store}>
      <Mission
        id={missionProps.id}
        missionName={missionProps.missionName}
        description={missionProps.description}
        highlights={missionProps.highlights}
        reserved={missionProps.reserved}
      />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
