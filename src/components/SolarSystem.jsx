import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headlines="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
