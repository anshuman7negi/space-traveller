import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionButton from '../../src/components/MissionButton';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionButton Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  test('renders "Join missions" button by default', () => {
    const { getByText } = render(<MissionButton id="123" reserved={false} />);
    const joinButton = getByText('Join missions');
    expect(joinButton).toBeInTheDocument();
  });

  test('renders "Leave missions" button when reserved is true', () => {
    const { getByText } = render(<MissionButton id="123" reserved={true} />);
    const leaveButton = getByText('Leave missions');
    expect(leaveButton).toBeInTheDocument();
  });

  test('dispatches joinMission action when clicking on "Join missions" button', () => {
    const { getByText } = render(<MissionButton id="123" reserved={false} />);
    const joinButton = getByText('Join missions');
    fireEvent.click(joinButton);
    expect(mockDispatch).toHaveBeenCalledWith(joinMission('123'));
  });

  test('dispatches leaveMission action when clicking on "Leave missions" button', () => {
    const { getByText } = render(<MissionButton id="123" reserved={true} />);
    const leaveButton = getByText('Leave missions');
    fireEvent.click(leaveButton);
    expect(mockDispatch).toHaveBeenCalledWith(leaveMission('123'));
  });
});
