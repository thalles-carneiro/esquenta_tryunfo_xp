# Requisitos da dinâmica

## 1. Crie o formulário que será usado para adicionar cartas ao baralho
Crie um formulário que será utilizado para criar as cartas do seu baralho.

  * Crie um componente chamado `Form` dentro da pasta `src/components`.

  * Renderize o componente `Form` dentro do componente principal `App`. 

  * Crie os seguintes itens dentro do component `Form`:
  
    - um campo do tipo `text` que contenha o atributo `data-testid="title-input"`. Este campo será usado para inserir o título da carta.

    - um campo do tipo `text` que contenha o atributo `data-testid="type-input"`. Este campo será usado para inserir o tipo da carta.

    - um campo do tipo `textarea` que contenha o atributo `data-testid="ability-input"`. Este campo será usado para inserir a abilidade da carta.

    - um campo do tipo `number` que contenha o atributo `data-testid="power-input"`. Este campo será usado para inserir o atributo de poder da carta.

    - um campo do tipo `number` que contenha o atributo `data-testid="toughness-input"`. Este campo será usado para inserir o atributo de resistência da carta.

    - um campo do tipo `text` que contenha o atributo `data-testid="image-input"`. Este campo será usado para inserir o caminho para imagem da carta.

    - um campo do tipo `select` que contenha o atributo `data-testid="rare-input"`. Este campo será usado para inserir a raridade da carta e deverá ter as `options`: `comum`, `incomum`, `raro` (é importante que as opções estejam nessa ordem).

    - um `button`que contenha o atributo  `data-testid="save-button"` e que tenha o texto "Salvar".

### O que será verificado

  - Será validado se existe um input texto que possui o `data-testid="title-input"`.
  - Será validado se existe um input texto que possui o `data-testid="type-input"`.
  - Será validado se existe um input textarea que possui o `data-testid="ability-input"`.
  - Será validado se existe um input number que possui o `data-testid="power-input"`.
  - Será validado se existe um input number que possui o `data-testid="toughness-input"`.
  - Será validado se existe um input texto que possui o `data-testid="image-input"`.
  - Será validado se existe um input select que possui o `data-testid="rare-input"`.
  - Será validado se existe um botão que possui o `data-testid="save-button"`.

---

## 2. Adicione as props necessárias ao componente de formulário 

  * O componente `Form` deverá receber as seguintes props:
    - `cardTitle`, uma string;
    - `cardType`, uma string;
    - `cardAbility`, uma string;
    - `cardPower`, um number;
    - `cardToughness`, um number;
    - `cardImage`, uma string;
    - `cardRare`, uma string;
    - `isSaveButtonDisabled`, um boolean;
    - `onInputChange`, uma callback;
    - `onSaveButtonClick`, uma callback;

As props do componente `Form` deverão ser utilizadas conforme o indicado abaixo:

  * Campo `title-input`: a propriedade `value` deve receber o valor da prop `cardTitle` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `type-input`: a propriedade `value` deve receber o valor da prop `cardType` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `ability-input`: a propriedade `value` deve receber o valor da prop `cardAbility` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `power-input`: a propriedade `value` deve receber o valor da prop `cardPower` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `toughness-input`: a propriedade `value` deve receber o valor da prop `cardToughness` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `image-input`: a propriedade `value` deve receber o valor da prop `cardImage` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Campo `rare-input`: a propriedade `value` deve receber o valor da prop `cardRare` e a propriedade `onChange` deve receber o valor da prop `onInputChange`.

  * Botão `save-button`: a propriedade `disabled` deve receber o valor da prop `isSaveButtonDisabled` e a prop `onClick` deve receber o valor da prop `onSaveButtonClick`.

  ### O que será verificado

  - Será validado se o campo de nome recebe o valor da prop `cardTitle` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de tipo recebe o valor da prop `cardType` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de descrição recebe o valor da prop `cardAbility` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo do poder recebe o valor da prop `cardPower` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo da resistência recebe o valor da prop `cardToughness` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de imagem recebe o valor da prop `cardImage` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o campo de raridade recebe o valor da prop `cardRare` e se a callback `onInputChange` é chamada quando o campo sofre alguma alteração.

  - Será validado se o botão de salvar é habilitado se o valor da prop `isSaveButtonDisabled` for `false`.

  - Será validado se o botão de salvar é desabilitado se o valor da prop `isSaveButtonDisabled` for `true`.

  - Será validado a callback `onSaveButtonClick` é chamada quando o botão é clicado. 

---

## 3. Crie e renderize o componente Card com as props necessárias

  * Crie um componente com o nome `Card` na pasta `src/components` e renderize-o  no componente principal `App`. O componente `Card` deve receber as seguintes props: 
    - `cardTitle`, uma string;
    - `cardType`, uma string;
    - `cardAbility`, uma string;
    - `cardPower`, um number;
    - `cardToughness`, um number;
    - `cardImage`, uma string;
    - `cardRare`, uma string;

  * Renderize o componente `Card` dentro do componente principal `App`.

  * Exiba o valor da prop `cardTitle`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="title-card"`.

  * Exiba a imagem usando a tag HTML `img`, com o atributo `src` que tenha o valor da prop `cardImage` e o atributo `alt` com o valor da prop `cardTitle`. Essa imagem também deve ter o atributo `data-testid="image-card"`

  * Exiba o valor da prop `cardType`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="type-card"`.

  * Exiba o valor da prop `cardAbility`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="ability-card"`.
  
  * Exiba o valor da prop `cardPower`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="power-card"`.

  * Exiba o valor da prop `cardToughness`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="toughness-card"`

  * Exiba o valor da prop `cardRare`. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="rare-card"`.

### O que será verificado
  
  - Será validado se o componente `data-testid="title-card"` é exibido e possui o valor da prop `cardTitle`.
  - Será validado se o componente `data-testid="image-card"` é exibido e possui o atributo `src` com o valor da prop `cardImage` e o atributo alt com o valor da prop `cardTitle`.
  - Será validado se o componente `data-testid="type-card"` é exibido e possui o valor da prop `cardType`.
  - Será validado se o componente `data-testid="ability-card"` é exibido e possui o valor da prop `cardAbility`.
  - Será validado se o componente `data-testid="power-card"` é exibido e possui o valor da prop `cardPower`.
  - Será validado se o componente `data-testid="toughness-card"` é exibido e possui o valor da prop `cardToughness`.
  - Será validado se o componente `data-testid="rare-card"` é exibido e possui o valor da prop `cardRare`.

---

## 4. Crie o preview da carta que está sendo criada pelo formulário

Até o momento você criou dois componentes que recebem `props`, agora está na hora de criar o estado dos componentes.
Os componentes `Form` e `Card` irão compartilhar o mesmo estado para exibir as mesmas informações (isso já te dá uma dica de onde o estado deve estar, não é mesmo?).
Quando alguma informação é digitada em algum campo do formulário, o componente `Card` deve exibir a mesma informação em tempo real, criando um preview da carta antes de ela ser salva no baralho (a funcionalidade de salvar será feita nos próximos requisitos). 

Você deverá usar a prop `onInputChange` para passar uma callback para lidar com os eventos de `onChange` dos inputs do formulário. Não se esqueça que os valores dos inputs (que também são passados por props) também devem ser salvos em um estado.

**Dica:** o mesmo estado usado para controlar os inputs do formulário podem ser passados para o componente `Card`.

Veja como deve ser o funcionamento da aplicação:

  * Ao digitar algo no campo com o `data-testid="title-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="title-card"`.

  * Ao digitar algo no campo com o `data-testid="type-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="type-card"`.

  * Ao digitar algo no campo com o `data-testid="ability-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="ability-card"`.

  * Ao digitar algo no campo com o `data-testid="image-input"` do formulário, o mesmo valor deverá ser passado para o componente `Card`, e ser usado no atributo `src` do elemento com o `data-testid="image-card"`.

  * Ao digitar algo no campo com o `data-testid="power-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="power-card"`.

  * Ao digitar algo no campo com o `data-testid="toughness-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="toughness-card"`.

  * Ao selecionar algum valor no `select` com o `data-testid="rare-input"` do formulário, o mesmo valor deverá ser renderizado no componente `Card`, no elemento com o `data-testid="rare-card"`.

  **Dica:** para campos que precisem de um valor padrão (como o campo de raridade, por exemplo) você pode iniciar o estado já com esse valor.

### O que será verificado

  - Será validado se é renderizado no preview da carta o valor digitado no input Título do formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input Tipo do formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input Habilidade do formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input referente ao poder no formulário.
  - Será validado se é renderizado no preview da carta o valor digitado no input referente à resistência no formulário.

--- 

## 5. Faça a validação do botão de Salvar no formulário

  O botão que possui o atributo `data-testid="save-button"` só deve estar habilitado se todas as informações do formulário estiverem preenchidas corretamente, seguindo as seguintes regras:

  * Os campos `Título`, `Tipo`, `Habilidade`, `Imagem` e `Raridade ` devem conter alguma informação (ou seja, os `inputs` não podem estar vazios).

  * Cada um dos atributos pode ter **no máximo 10 pontos cada**.
  
  * Os atributos não podem receber valores negativos.

### O que será verificado

  - Será validado se o botão `salvar` está desabilitado quando a página é renderizada pela primeira vez.
  - Será validado se o botão `salvar` está desabilitado se o campo título estiver vazio.
  - Será validado se o botão `salvar` está desabilitado se o campo tipo estiver vazio.
  - Será validado se o botão `salvar` está desabilitado se o campo imagem estiver vazio.
  - Será validado se o botão `salvar` está desabilitado se o campo habilidade estiver vazio.
  - Será validado se o botão `salvar` está desabilitado se o campo do poder for maior que 10.
  - Será validado se o botão `salvar` está desabilitado se o campo do poder for menor que 0.
  - Será validado se o botão `salvar` está desabilitado se o campo da resistência for maior que 10.
  - Será validado se o botão `salvar` está desabilitado se o campo da resistência for menor que 0.
  - Será validado se o botão `salvar` é habilitado ao preencher todos os campos do formulário corretamente.

---

## 6. Crie a função do botão salvar
Agora que o botão de salvar já está validado, você pode adicionar uma nova carta ao seu baralho. Isso significa que você precisará criar um novo estado na sua aplicação para salvar a lista de cartas existentes no seu baralho.
**Dica:** você pode salvar cada carta em um formato de objeto e ter um _array_ com esses objetos no seu estado.

  * Ao clicar no botão que possui o atributo `data-testid="save-button"`, as informações que foram preenchidas no formulário deverão ser salvas no estado da sua aplicação.

  * Após salvar as informações, os `inputs` do formulário `Nome`, `Tipo`, `Descrição` e `Imagem` e o conteúdo do preview da carta deverão ser limpos.

  * Após salvar as informações, os campos de poder e resistência devem ter valor 0.

  * Após salvar as informações, o campo `Raridade` deve conter o valor `comum`.
### O que será verificado

  - Será validado se os campos do formulário `Nome`, `Tipo`, `Descrição` e `Imagem` são limpos após clicar em `salvar`.

  - Será validado se o os campos de poder e resistência tem o valor `0` após clicar em `salvar`.
  
  - Será validado se o campo de `Raridade` tem o valor `comum` após clicar em `salvar`.
