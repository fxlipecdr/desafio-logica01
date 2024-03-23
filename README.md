# **Classificador de Nível de Herói**

Este é um projeto simples que implementa um classificador de nível de herói em JavaScript. O classificador determina o nível de um herói com base em sua experiência (XP) e imprime uma mensagem correspondente.

## Funcionamento

O projeto utiliza duas abordagens diferentes para classificar o nível do herói:

1. **Usando `switch-case`**:
   - Nesta abordagem, o classificador utiliza uma instrução `switch` para determinar o nível do herói com base em sua experiência. Cada caso do `switch` representa um intervalo de experiência e imprime o nível correspondente do herói.

2. **Usando condicionais (`if-else`)**:
   - Aqui, o classificador utiliza instruções condicionais (`if-else`) para realizar a mesma tarefa de classificação com base nos intervalos de experiência do herói.

## Conteúdo do Repositório

O repositório contém os seguintes arquivos:

- `classificador_heroi.js`: Contém a implementação do classificador de nível de herói utilizando `switch-case`.
- `classificador_heroi_condicionais.js`: Contém a implementação do classificador de nível de herói utilizando condicionais (`if-else`).
- `README.md**: Este arquivo README que fornece informações sobre o projeto.

## Como Utilizar

Para utilizar o classificador de nível de herói, siga estas etapas:

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `classificador_heroi.js` ou `classificador_heroi_condicionais.js` em um editor de código.
3. Altere o valor da variável `expHeroi` para a experiência desejada do herói.
4. Execute o arquivo JavaScript no seu ambiente de execução preferido (por exemplo, Node.js) para ver a classificação do herói.

## Exemplo de Uso

Suponha que tenhamos um herói chamado "Steve" com uma experiência de 2001 pontos. Ao executar o script, o classificador determinará que Steve está no nível "Bronze" e exibirá a seguinte mensagem:

O Herói de nome Steve está no nível de Bronze

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.