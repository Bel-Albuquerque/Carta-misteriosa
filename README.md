# Mistery Letter

### Projeto desenvolvido no módulo de fundamentos Trybe 

## Habilidades desenvolvidas

- Manipular o DOM com javaScript

---

## Requisitos Obrigatórios **(texto a baixo da [Trybe](https://github.com/tryber))**:

### 1 - Deve haver um `input` com o id=\"carta-texto\" onde a pessoa usuária poderá digitar o conteúdo da carta

**O que será verificado:**

- Será validado que existe um elemento `input` com `id=carta-texto`

### 2 - Deve haver um parágrafo com o id=\"carta-gerada\" onde a pessoa usuária verá o resultado de sua carta misteriosa

**O que será verificado:**

- Será validado que existe um elemento `p` com o `id="carta-gerada"`

### 3 - Deve haver um botão com id=\"criar-carta\" e ao clicar nesse botão, a carta misteriosa deve ser gerada

  Pontos importantes:

    * Cada palavra deve aparecer dentro de uma tag `span`.
    * As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.

**O que será verificado:**

- Será validado que existe um elemento `button` com `id="criar-carta"`

- Será validado que ao clicar no botão, a carta misteriosa deve ser gerada

### 4 - Ao criar uma carta através do botão com id="criar-carta", o `input` com id="carta-texto" deve permanecer com o texto digitado

**O que será verificado:**

- Será validado que ao criar uma carta através do botão `id="criar-carta"` o input` com id=\"carta-texto\" permanece com o texto digitado

### 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

**O que será verificado:**

- Será validado que irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o `id="carta-gerada"

### 6 - Crie a classe `newspaper`

  Pontos importantes:

    * Defina as propriedades:
      - `background-color` com o valor `antiquewhite`
      - `font-family` com o valor `Times New Roman`
      - `font-weight` com o valor `bold`

**O que será verificado:**

- Será validado se a classe `newspaper` possui a propriedade `background-color` igual a rgb(250, 235, 215)

- Será validado se a classe `newspaper` possui `font-family` igual a "Times New Roman"

- Será validado se a classe `newspaper` possui a propriedade `font-weight` igual a 700

### 7 - Crie a classe `magazine1`.

  Pontos importantes:

    * Defina as propriedades:
      - `background-color` com o valor `teal`
      - `color` com o valor `white`
      - `font-family` com o valor `Verdana`
      - `font-weight` com o valor `900`
      - `text-transform` com o valor `uppercase`

**O que será verificado:**

- Será validado se a classe `magazine1` possui a propriedade `background-color` igual a rgb(0, 128, 128)`

- Será validado se a classe `magazine1` possui  a propriedade `color` igual a rgb(255, 255, 255)`

- Será validado se a classe `magazine1` possui propriedade `font-family` igual a "Verdana"

-  Será validado se a classe `magazine1` possui a propriedade `font-weight` igual a "900"

- Será validado se a classe `magazine1` possui a propriedade `text-transform` igual a "uppercase"`

### 8 - Crie a classe `magazine2`.

  Pontos importantes:

    * Defina as propriedades:
      - `background-image` com a imagem `images/pink-pattern.png`
      - `color` com o valor `fuchsia`
      - `font-family` com o valor `Verdana`
      - `font-weight` com o valor `900`

**O que será verificado:**

- Será validado se a classe `magazine2` possui a propriedade `background-image` igual a "images/pink-pattern.png"

- Será validado se a classe `magazine2` possui a propriedade `color` igual a rgb(255, 0, 255)

- Será validado se a classe `magazine2` possui a propriedade `font-family` igual a "Verdana"

- Será validado se a classe `magazine2` possui a propriedade `font-weight` igual a "900"

### 9 - Crie a classe `medium`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `20px`
      - `padding` com o valor `8px`

**O que será verificado:**

- Será validado se a classe `medium` possui a propriedade `font-size` igual a "20px"

- Será validado se a classe `medium` possui a propriedade `padding` igual a "8px"


### 10 - Crie a classe `big`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `30px`
      - `padding` com o valor `10px`

**O que será verificado:**

- Será validado se a classe `big` possui a propriedade `font-size` igual a "30px"

- Será validado se a classe `big` possui a propriedade `padding` igual a "10px"

### 11 - Crie a classe `reallybig`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `40px`
      - `padding` com o valor `15px`

**O que será verificado:**

- Será validado se a classe `reallybig` possui a propriedade `font-size` igual a "40px"

- Será validado se a classe `reallybig` possui a propriedade `padding` igual a "15px"

### 12 - Crie a classe `rotateleft`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `rotate(-5deg)`

**O que será verificado:**

- Será validado se a classe `rotateleft` possui a propriedade `transform` igual a "matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)"

### 13 - Crie a classe `rotateright`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `rotate(5deg)`

**O que será verificado:**

- Será validado se a classe `rotateright` possui a propriedade `transform` igual a "matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)"

### 14 - Crie a classe `skewleft`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `skewX(10deg)`;

**O que será verificado:**

- Será validado se a classe `skewleft` possui a propriedade `transform` igual a "matrix(1, 0, 0.176327, 1, 0, 0)"

### 15 - Crie a classe `skewright`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `skewX(-10deg)`;

**O que será verificado:**

- erá validado se a classe `skewright` possui a propriedade `transform` igual a "matrix(1, 0, -0.176327, 1, 0, 0)"

### 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

  Pontos importantes:

    * As classes devem ser adicionadas às tags `span` de forma **aleatória**.
    * Sempre adicione mais de uma classe em uma palavra.
    * Utilize as classes:
      - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
      - `medium`, `big`, `reallybig` (Grupo tamanho)
      - `rotateleft`, `rotateright` (Grupo rotação)
      - `skewleft`, `skewright` (Grupo inclinação)

      Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
      Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.

**O que será verificado:**

- Será validado se ao criar uma carta ela recebe uma lista de classes aleatórias

- Será validado se ao criar uma segunda carta ela recebe uma lista de classes aleatórias

- Será validado se as classes das duas cartas não são exatamente iguais

## Requisitos Bônus:

### 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

  Pontos importantes:

    * Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
    * O número de mudanças deve ser ilimitado;

**O que será verificado:**

- Será validado se ao clicar em uma carta uma nova lista aleatória de classes é gerada

- Será validado se ao clicar novamente na mesma carta uma nova lista aleatória de classes é gerada e se a nova lista é diferente da lista anterior

### 18 - Deve haver um parágrafo com o id=\"carta-contador\" onde existirá um contador de palavras

  Pontos importantes:

    * Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
  
**O que será verificado:**

- Será validado que existe um elemento `p` com o `id="carta-contador"`

- Será validado se ao criar uma carta o elemento `p` com o `id="carta-contador"  é atualizado com o número de palavras da carta (valor numérico).
