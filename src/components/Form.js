import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardTitle,
      cardType,
      cardAbility,
      cardPower,
      cardToughness,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <Input
          label="Título"
          name="title"
          value={ cardTitle }
          callback={ onInputChange }
        />
        <Input
          label="Tipo"
          name="type"
          value={ cardType }
          callback={ onInputChange }
        />
        <label htmlFor="ability">
          Habilidade
          <textarea
            name="ability"
            value={ cardAbility }
            onChange={ onInputChange }
            data-testid="ability-input"
          />
        </label>
        <Input
          label="Poder"
          name="power"
          type="number"
          value={ cardPower }
          callback={ onInputChange }
        />
        <Input
          label="Resistência"
          name="toughness"
          type="number"
          value={ cardToughness }
          callback={ onInputChange }
        />
        <Input
          label="Imagem"
          name="image"
          value={ cardImage }
          callback={ onInputChange }
        />
        <label htmlFor="rare">
          <select
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>comum</option>
            <option>incomum</option>
            <option>raro</option>
          </select>
        </label>
        <input
          type="button"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        />
      </form>
    );
  }
}

const { string, bool, func } = PropTypes;

Form.propTypes = {
  cardTitle: string.isRequired,
  cardType: string.isRequired,
  cardAbility: string.isRequired,
  cardPower: string.isRequired,
  cardToughness: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};

export default Form;
