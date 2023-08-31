import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For the "toBeInTheDocument" matcher
import Mission from '../../src/components/Mission';

describe('Mission component', () => {
  const mockMission = {
    id: '1',
    missionName: 'Sample Mission',
    description: 'Sample description',
    highlights: true,
    reserved: true,
  };

  it('renders mission details correctly', () => {
    const { getByText } = render(<Mission {...mockMission} />);

    // Assert that mission name, description, and reservation status are rendered
    expect(getByText('Sample Mission')).toBeInTheDocument();
    expect(getByText('Sample description')).toBeInTheDocument();
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  it('renders "Active Member" status when reserved is true', () => {
    const { getByText } = render(<Mission {...mockMission} reserved={true} />);

    // Assert that "Active Member" status is rendered when reserved is true
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  it('renders "NOT A MEMBER" status when reserved is false', () => {
    const { getByText } = render(<Mission {...mockMission} reserved={false} />);

    // Assert that "NOT A MEMBER" status is rendered when reserved is false
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
  });
});
