import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("6 - Crie a função do botão salvar", () => {
  it("Será validado se os campos do formulário `Título`, `Tipo`, `Habilidade` e `Imagem` são limpos após clicar em `salvar`", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/title-input/i);
    const typeInput = screen.getByTestId(/type-input/i);
    const abilityInput = screen.getByTestId(/ability-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const powerInput = screen.getByTestId(/power-input/i);
    const toughnessInput = screen.getByTestId(/toughness-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(titleInput, 'Pessoa Instrutora na Trybe');
    userEvent.type(typeInput, 'Tryber');
    userEvent.type(abilityInput, 'Ensinar da melhor forma possível as pessoas estudantes');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(powerInput, 10);
    userEvent.type(toughnessInput, 10);
    userEvent.selectOptions(selectInput, "raro");

    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(titleInput).toHaveValue('');
    expect(abilityInput).toHaveValue('');
    expect(imageInput).toHaveValue('');
  });

  it("Será validado se os campos de poder e resistência tem o valor `0` após clicar em `salvar`", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/title-input/i);
    const typeInput = screen.getByTestId(/type-input/i);
    const abilityInput = screen.getByTestId(/ability-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const powerInput = screen.getByTestId(/power-input/i);
    const toughnessInput = screen.getByTestId(/toughness-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(titleInput, 'Pessoa Instrutora na Trybe');
    userEvent.type(typeInput, 'Tryber');
    userEvent.type(abilityInput, 'Ensinar da melhor forma possível as pessoas estudantes');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(powerInput, 10);
    userEvent.type(toughnessInput, 10);
    userEvent.selectOptions(selectInput, "raro");
    
    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(powerInput).toHaveValue(0);
    expect(toughnessInput).toHaveValue(0);
  });

  it("Será validado se o campo de `Raridade` tem o valor `comum` após clicar em `salvar`", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/title-input/i);
    const typeInput = screen.getByTestId(/type-input/i);
    const abilityInput = screen.getByTestId(/ability-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const powerInput = screen.getByTestId(/power-input/i);
    const toughnessInput = screen.getByTestId(/toughness-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");

    userEvent.type(titleInput, 'Pessoa Instrutora na Trybe');
    userEvent.type(typeInput, 'Tryber');
    userEvent.type(abilityInput, 'Ensinar da melhor forma possível as pessoas estudantes');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(powerInput, 10);
    userEvent.type(toughnessInput, 10);
    userEvent.selectOptions(selectInput, "raro");

    expect(saveBtn).toBeEnabled();
    userEvent.click(saveBtn);

    expect(selectInput).toHaveValue('comum');
  });
})