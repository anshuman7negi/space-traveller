import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MyProfile from '../../src/components/profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile Component', () => {
  const mockMissions = [
    { mission_id: '1', mission_name: 'Mission 1', reserved: true },
    { mission_id: '2', mission_name: 'Mission 2', reserved: false },
  ];

  const mockRockets = [
    { id: 'r1', name: 'Rocket 1', reserved: true },
    { id: 'r2', name: 'Rocket 2', reserved: false },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        missions: mockMissions,
        rockets: mockRockets,
      })
    );
  });

  test('renders joined missions correctly', () => {
    const { getByText } = render(<MyProfile />);
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).not.toBeInTheDocument();
  });

  test('renders reserved rockets correctly', () => {
    const { getByText } = render(<MyProfile />);
    expect(getByText('Rocket 1')).toBeInTheDocument();
    expect(getByText('Rocket 2')).not.toBeInTheDocument();
  });
});
