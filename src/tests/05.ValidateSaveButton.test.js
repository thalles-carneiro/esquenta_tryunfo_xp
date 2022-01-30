import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("5 - Faça a validação do botão de Salvar no formulário", () => {
  it("Será validado se o botão `salvar` está desabilitado quando a página é renderizada pela primeira vez", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo título estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/title-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/type-input/i), 'Lorem');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/ability-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/power-input/i), "3");
    userEvent.type(screen.getByTestId(/toughness-input/i), "2");
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();
    
    userEvent.type(screen.getByTestId(/title-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo imagem estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/title-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/type-input/i), 'Lorem');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/ability-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/power-input/i), "3");
    userEvent.type(screen.getByTestId(/toughness-input/i), "2");
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();

    userEvent.type(screen.getByTestId(/image-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo tipo estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/title-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/type-input/i), 'Lorem');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/ability-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/power-input/i), "3");
    userEvent.type(screen.getByTestId(/toughness-input/i), "2");
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();
    
    userEvent.type(screen.getByTestId(/type-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo habilidade estiver vazio", () => {
    render(<App />);
    
    const saveBtn = screen.getByTestId("save-button");
    userEvent.type(screen.getByTestId(/title-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/type-input/i), 'Lorem');
    userEvent.type(screen.getByTestId(/image-input/i), 'url-to-image');
    userEvent.type(screen.getByTestId(/ability-input/i), 'Lorem ipsum');
    userEvent.type(screen.getByTestId(/power-input/i), "3");
    userEvent.type(screen.getByTestId(/toughness-input/i), "2");
    userEvent.selectOptions(screen.getByTestId(/rare-input/i), 'raro');
    expect(saveBtn).not.toBeDisabled();

    userEvent.type(screen.getByTestId(/ability-input/i), '{selectall}{backspace}');
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo de poder for maior que 10", () => {
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
    userEvent.type(powerInput, "10");
    userEvent.type(toughnessInput, "10");
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(powerInput);
    userEvent.type(powerInput, "100");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão  `salvar` está desabilitado se o campo de poder for menor que 0", () => {
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
    userEvent.type(powerInput, "10");
    userEvent.type(toughnessInput, "10");
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(powerInput);
    userEvent.type(powerInput, "-1");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo de resistência for maior que 10", () => {
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
    userEvent.type(powerInput, "10");
    userEvent.type(toughnessInput, "10");
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(toughnessInput);
    userEvent.type(toughnessInput, "100");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` está desabilitado se o campo de resistência for menor que 0", () => {
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
    userEvent.type(powerInput, "10");
    userEvent.type(toughnessInput, "10");
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();

    userEvent.clear(toughnessInput);
    userEvent.type(toughnessInput, "-1");
    expect(saveBtn).toBeDisabled();
  });

  it("Será validado se o botão `salvar` é habilitado ao preencher todos os campos do formulário corretamente.", () => {
    render(<App />);
    
    const titleInput = screen.getByTestId(/title-input/i);
    const typeInput = screen.getByTestId(/type-input/i);
    const abilityInput = screen.getByTestId(/ability-input/i);
    const imageInput = screen.getByTestId(/image-input/i);
    const powerInput = screen.getByTestId(/power-input/i);
    const toughnessInput = screen.getByTestId(/toughness-input/i);
    const selectInput = screen.getByTestId(/rare-input/i);
    const saveBtn = screen.getByTestId("save-button");
    
    expect(saveBtn).toBeDisabled();

    userEvent.type(titleInput, 'Pessoa Instrutora na Trybe');
    userEvent.type(typeInput, 'Tryber');
    userEvent.type(abilityInput, 'Ensinar da melhor forma possível as pessoas estudantes');
    userEvent.type(imageInput, 'url-to-image');
    userEvent.type(powerInput, "10");
    userEvent.type(toughnessInput, "10");
    userEvent.selectOptions(selectInput, "raro");
    expect(saveBtn).not.toBeDisabled();
  });
})