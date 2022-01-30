import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare } = this.props;

    return (
      <section>
        <div>
          <h3 data-testid="title-card">
            { cardTitle }
          </h3>
          <img src={ cardImage } alt={ cardTitle } data-testid="image-card" />
          <p data-testid="type-card">
            { cardType }
          </p>
          <p data-testid="ability-card">
            { cardAbility }
          </p>
          <p data-testid="power-card">
            { cardPower }
          </p>
          <p data-testid="toughness-card">
            { cardToughness }
          </p>
          <p data-testid="rare-card">
            { cardRare }
          </p>
        </div>
      </section>
    );
  }
}

const { string } = PropTypes;

Card.propTypes = {
  cardTitle: string.isRequired,
  cardType: string.isRequired,
  cardAbility: string.isRequired,
  cardPower: string.isRequired,
  cardToughness: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
};

export default Card;
