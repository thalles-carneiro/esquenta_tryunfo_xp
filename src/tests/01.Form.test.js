import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("1 - Crie o formulário que será usado para adicionar cartas ao baralho", () => {

  it("Será validado se existe um input texto que possui o `data-testid='title-input'`", () => {
    render(<App />);
    const titleInput = screen.getByTestId(/title-input/i);
    expect(titleInput).toBeInTheDocument();
  });

  it("Será validado se existe um input texto que possui o `data-testid='type-input'`", () => {
    render(<App />);
    const typeInput = screen.getByTestId(/type-input/i);
    expect(typeInput).toBeInTheDocument();
  });

  it("Será validado se existe um input textarea que possui o `data-testid='ability-input'`", () => {
    render(<App />);
    const abilityInput = screen.getByTestId(/ability-input/i);
    expect(abilityInput).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='power-input'`", () => {
    render(<App />);
    const power = screen.getByTestId(/power-input/i);
    expect(power).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='toughness-input'`", () => {
    render(<App />);
    const toughness = screen.getByTestId(/toughness-input/i);
    expect(toughness).toBeInTheDocument();
  });

  it("Será validado se existe um input texto que possui o `data-testid='image-input'`", () => {
    render(<App />);
    const imgInput = screen.getByTestId(/image-input/i);
    expect(imgInput).toBeInTheDocument();
  });

  it("Será validado se existe um input select que possui o `data-testid='rare-input'`", () => {
    render(<App />);
    const rareInput = screen.getByTestId(/rare-input/i);
    expect(rareInput).toBeInTheDocument();
    expect(rareInput.options[0].value).toBe("comum");
    expect(rareInput.options[1].value).toBe("incomum");
    expect(rareInput.options[2].value).toBe("raro");
  });

  it("Deve renderizar o botão Salvar", () => {
    render(<App />);
    const saveBtn = screen.getByTestId(/save-button/i);
    expect(saveBtn).toBeInTheDocument();
  });
});