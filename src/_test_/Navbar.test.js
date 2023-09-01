import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // You need to wrap the component in a Router context
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  it('renders the navigation links correctly', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(getByText('Rockets')).toBeInTheDocument();
    expect(getByText('Missions')).toBeInTheDocument();
    expect(getByText('My Profile')).toBeInTheDocument();
  });

  it('displays the logo image correctly', () => {
    const { getByAltText } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    const logoImage = getByAltText('');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'planet.png');
  });

  // You can add more test cases to cover different scenarios and edge cases
});