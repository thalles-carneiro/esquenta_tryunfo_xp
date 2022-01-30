export function validateInputs(state) {
  const { title, type, ability, power, toughness, image, rare } = state;
  const MAX_ATTR = 10;

  if ([title, type, ability, image, rare].some((input) => input.length === 0)) {
    return true;
  }

  if (
    [+power, +toughness].some((input) => input > MAX_ATTR || input < 0)
  ) {
    return true;
  }

  return false;
}

export function clearForm(prevState) {
  return ({
    ...prevState,
    title: '',
    type: '',
    ability: '',
    power: '0',
    toughness: '0',
    image: '',
    rare: 'normal',
  });
}

export function saveNewCard(prevState) {
  const { cards, ...newCard } = prevState;

  return ({
    ...prevState,
    cards: cards.concat(newCard),
  });
}
