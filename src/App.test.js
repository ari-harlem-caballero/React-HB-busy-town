import { render, screen } from '@testing-library/react';
import App from './App';
import TrafficLight from './TrafficLight';

test('renders green light on click', () => {
  render(<TrafficLight />); //do i need to import trafficeLights.js?


  const greenLight = screen.getByTitle('green-light');


  expect(greenLight).toBeInTheDocument(); //setLightColor to 'green', button is active
});
