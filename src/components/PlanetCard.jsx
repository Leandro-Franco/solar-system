import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { PlanetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ PlanetImage } alt={ `planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  PlanetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
