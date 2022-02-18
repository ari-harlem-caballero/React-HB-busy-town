import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component traffic light', () => {
  render(<App />); //do i need to import trafficeLights.js?


  const linkElement = screen.getByText(/green/i);


  expect(linkElement).toBeInTheDocument(); //setLightColor to 'green', button is active
});
