import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("4 - Crie o preview da carta que está sendo criada pelo formulário", () => {
  it("Será validado se é renderizado no preview da carta o valor digitado no input Título do formulário", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/title-input/i);
    userEvent.type(titleInput, 'Arconte da Absolvição');
    const titlePreview = screen.getByTestId('title-card');
    expect(titlePreview).toHaveTextContent('Arconte da Absolvição');
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input Tipo do formulário", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/type-input/i);
    userEvent.type(titleInput, 'Criatura - Arconte');
    const titlePreview = screen.getByTestId('type-card');
    expect(titlePreview).toHaveTextContent('Criatura - Arconte');
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input Descrição do formulário", () => {
    render(<App />);
    const abilityInput = screen.getByTestId(/ability-input/i);
    userEvent.type(abilityInput, 'Voar');
    const abilityPreview = screen.getByTestId('ability-card');
    expect(abilityPreview).toHaveTextContent('Voar');
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input referente ao poder no formulário", () => {
    render(<App />);
    const powerInput = screen.getByTestId(/power-input/i);
    userEvent.type(powerInput, "3");
    const powerPreview = screen.getByTestId(/power-card/i)
    expect(powerPreview).toHaveTextContent('3')
  });

  it("Será validado se é renderizado no preview da carta o valor digitado no input referente à resistência no formulário", () => {
    render(<App />);
    const toughnessInput = screen.getByTestId(/toughness-input/i);
    userEvent.type(toughnessInput, "2");
    const toughnessPreview = screen.getByTestId(/toughness-card/i)
    expect(toughnessPreview).toHaveTextContent('2')
  });
})