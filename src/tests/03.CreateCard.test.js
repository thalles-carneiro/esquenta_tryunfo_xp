import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

const defaultProps = {
  cardTitle: "Título da carta",
  cardType: "Tipo da carta",
  cardAbility: "Habilidade da carta",
  cardPower: 5,
  cardToughness: 6,
  cardImage: "url-to-image",
  cardRare: "incomum",
}

describe("3 - Crie e renderize o componente Card com as props necessárias", () => {
  it("Será validado se o componente `data-testid=title-card` é exibido e possui o valor da prop `cardTitle`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/title-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Título da carta");
  });

  it("Será validado se o componente `data-testid=type-card` é exibido e possui o valor da prop `cardType`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/type-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Tipo da carta");
  });

  it("Será validado se o componente `data-testid=image-card` é exibido e possui o atributo `src` com o valor da prop `cardImage` e o atributo alt com o valor da prop `cardTitle`", () => {
    render(<Card {...defaultProps} />);
    const image = screen.getByTestId(/image-card/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "url-to-image");
    expect(image).toHaveAttribute("alt", "Título da carta");
  });

  it("Será validado se o componente `data-testid=ability-card` é exibido e possui o valor da prop `cardAbility`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/ability-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Habilidade da carta");
  });

  it("Será validado se o componente `data-testid=power-card` é exibido e possui o valor da prop `cardPower`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/power-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("5");
  });

  it("Será validado se o componente `data-testid=toughness-card` é exibido e possui o valor da prop `cardToughness`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/toughness-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("6");
  });

  it("Será validado se o componente `data-testid=rare-card` é exibido e possui o valor da prop `cardRare`", () => {
    render(<Card {...defaultProps} />);
    const text = screen.getByTestId(/rare-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("incomum");
  });
});