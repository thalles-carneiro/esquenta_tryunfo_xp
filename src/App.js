import React from 'react';

import { Form, Card } from './components';

import { validateInputs, clearForm, saveNewCard } from './helpers';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      type: '',
      ability: '',
      power: '0',
      toughness: '0',
      image: '',
      rare: 'normal',
      cards: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSaveButtonClick() {
    this.setState(saveNewCard, () => this.setState(clearForm));
  }

  render() {
    const {
      state,
      handleChange,
      handleSaveButtonClick } = this;

    const {
      title,
      type,
      ability,
      power,
      toughness,
      image,
      rare,
      cards } = state;

    return (
      <div>
        <h1>Magic the Gathering</h1>

        <section>
          <Form
            cardTitle={ title }
            cardType={ type }
            cardAbility={ ability }
            cardPower={ power }
            cardToughness={ toughness }
            cardImage={ image }
            cardRare={ rare }
            isSaveButtonDisabled={ validateInputs(state) }
            onInputChange={ handleChange }
            onSaveButtonClick={ handleSaveButtonClick }
          />
          <Card
            cardTitle={ title }
            cardType={ type }
            cardAbility={ ability }
            cardPower={ power }
            cardToughness={ toughness }
            cardImage={ image }
            cardRare={ rare }
          />
        </section>

        <section>
          <h3>Todas as cartas</h3>

          {
            cards.map((card, index) => (
              <Card
                key={ index }
                cardTitle={ card.title }
                cardType={ card.type }
                cardAbility={ card.ability }
                cardPower={ card.power }
                cardToughness={ card.toughness }
                cardImage={ card.image }
                cardRare={ card.rare }
                onRemoveButtonClick={ (cardIndex) => handleCardRemoval(cardIndex) }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
