import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/Form';

const defaultProps = {
  cardTitle: "Título da carta",
  cardType: "Tipo da carta",
  cardAbility: "Habilidade da carta",
  cardPower: 5,
  cardToughness: 6,
  cardImage: "url-to-image",
  cardRare: "raro",
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
}

describe("2 - Adicione as props necessárias ao componente de formulário", () => {
  it("Será validado se o campo de título recebe o valor da prop `cardTitle` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/title-input/i);

    expect(input).toHaveValue("Título da carta");
    
    userEvent.type(input, "Novo nome");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de tipo recebe o valor da prop `cardType` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/type-input/i);

    expect(input).toHaveValue("Tipo da carta");
    
    userEvent.type(input, "Novo tipo");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de habilidade recebe o valor da prop `cardAbility` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/ability-input/i);

    expect(input).toHaveValue("Habilidade da carta");
    
    userEvent.type(input, "Nova habilidade");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de poder recebe o valor da prop `cardPower` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/power-input/i);

    expect(input).toHaveValue(5);
    
    userEvent.type(input, 7);
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 2 recebe o valor da prop `cardToughness` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/toughness-input/i);

    expect(input).toHaveValue(6);
    
    userEvent.type(input, 8);
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de imagem recebe o valor da prop `cardImage` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/image-input/i);

    expect(input).toHaveValue("url-to-image");
    
    userEvent.type(input, "new-ur-to-image");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o campo de raridade recebe o valor da prop `cardRare` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração", () => {
    const onInputChange =  jest.fn();
    render(<Form {...defaultProps} onInputChange={onInputChange} />);
    const input = screen.getByTestId(/rare-input/i);

    expect(input).toHaveValue("raro");
    
    userEvent.selectOptions(input, "muito raro");
    expect(onInputChange).toHaveBeenCalled();
  });

  it("Será validado se o botão de salvar é desabilitado se o valor da prop `isSaveButtonDisabled` for `false`", () => {
    render(<Form {...defaultProps} isSaveButtonDisabled={false} />);
    const button = screen.getByTestId(/save-button/i);

    expect(button).not.toBeDisabled();
  });

  it("Será validado se o botão de salvar é habilitado se o valor da prop `isSaveButtonDisabled` for `true`", () => {
    render(<Form {...defaultProps} isSaveButtonDisabled={true} />);
    const button = screen.getByTestId(/save-button/i);

    expect(button).toBeDisabled();
  });

  it("Será validado a callback `onSaveButtonClick` é chamada quando o botão é clicado", () => {
    const onSaveButtonClick =  jest.fn();
    render(<Form {...defaultProps} onSaveButtonClick={onSaveButtonClick} />);
    const button = screen.getByTestId(/save-button/i);

    userEvent.click(button);
    expect(onSaveButtonClick).toHaveBeenCalled();
  });
});