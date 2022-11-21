https://app.skule.com.br/users/sign_in

## JS assincrono e promiss

**Sistema Sincrono**
- Uma tarefa termina para outra começar;
- Por padrão o JS é um sistema sincrono;

**Sistema Assincrono**
- Todas as tarefas acontecem ao mesmo tempo;
- O JS poderá usar o assincronismo ao seu favor;

**callback**
- Função que é passada como argumento  para outra função e depois é chamada de volta (callback)
- Funções que aceitam qualquer tipo de dados como argumento;
- Funções aceitam qualquer tipo de dado como argumento

**setTimeout**
- É como se fosse um delay para a função começar a rodar;
- Estrutura
    ```setTimeout(function(){```<br>
    ```console.log('depois de 1s)```<br>
    ```}, 1000}```<br>
    - O tempo é dado em milisegundos(ms)

## Promiss
- É uma promessa de algo vai acontecer
    - Pode ou não acontecer
    - Usada para operações assíncronas
- Uma promiss tem 4 estágios:
    - Pending
        - Estado inicial, asssim que o Objeto da proessa for iniciado
    - Fulfilled
        - A promessa foi concluida com sucesso
    - Rejected
        - A promessa foi rejeitada, houve um erro
    - Settled
        - Seja com sucesso ou com erro, ela foi finalmente concluída

- **Sintaxe**
    - ```new Promise(() => {})```
    - ```then()``` :arrow_right: fulfilled
    - ```catch()```
    - ```finally()```

**fetch()**
- Estrutura de promessas pendentes
- exemplo:
    - ```fetch('URL')```
- é possível encadear promises para que o código fique mais simples

**axios**
- É uma biblioteca
- É um HTTP client baseado em promessas para que possamos usar no browser e no node.js 


## API's
**Arquivos .json**
- Pode ser usado por qualquer linguagem
- Função: Troca de dados entre dois softwares

**5 principais verbos HTTP que usamos quando estamos trabalhando com web e API's**
- GET
    - A API tem que devolver alguma informação;

- POST
    - A API recebe informações que devem ou não ser registradas;

- DELETE
    - Quando a API ou site recebem um identificador de registros que devem ser apagados

- PUT
    - Atualizar informações, ou seja, fazer o update de 1 ou mais registros;


- PATCH
    - Atualizar informações, ou seja, fazer o update de **APENAS 1 registros**;

**Programa insomnia**
- Será usado por que o navegador só utiliza o GET



## React
- Tudo é JavaScript
- O React renderiza o HTML através de uma função que retorna HTML
- Só pode retornar um único elemento
	- Embrulhar com ```<>``` e ```</>``` ou uma ```<div>  </div>```

**Importando arquivos CSS**
- 







## Transitions 
**Transition-time-function**
- Transições nas divs
    - ``ease``
    - ``linear``
    - ``ease-in``
    - ``ease-in-out``
    - ``cubic-bezier``

**Transition Delay**
- Tempo que demora para começar uma transição
- ```transition-delay: 4s;```

**CSS Animation**
- Animações que acontecem sem depender da interação do usuário
- Trabalha com uma propriedade dos CSS chamada ```@key-frames```
- Exemplo:<br>

```.ball{```<br>
```width: 100px;```<br>
```height: 100px;```<br>
```border-radius: 100%;```<br>
```background-color:red;```<br>
```position: relative;```<br>
```animation-name: exemple-one;```<br>
```animation-duration: 4s;```<br>
```animation-delay: 2s;```<br>
```}```<br><br>

- Usando ```from``` e ```to```:<br>
- **From**
    - Como a animação vai começar

- **to**
    - Como a animação vai terminar<br>

```@keyframes exemple-one{```<br>
```from{```<br>
```background-color: green;```<br>
```}```<br>
```to{```<br>
```background-color:brown;```<br>
```}```<br>
```}```<br>
<br>

- Usando porcentagens: ```0%, 25%, 50% e 100%:```<br>

```@keyframes exemple-two{```<br>
```0% {```<br>
```background-color: green;```<br>
```}```<br>
```25% {```<br>
```background-color:brown;```<br>
```}```<br>
```50% {```<br>
```background-color:rosibrown;```<br>
```}```<br>
```100% {```<br>
```background-color:yellow;```<br>
    ```}```<br>
```}```<br>
<br>


**animation-delay**
- Tempo que a animação demora pra começar;
- Apenas na primeira vez que a página for carregada

**animation-iteration-count**
- Quantidade de vezes que a animação vai acontecer; 

**animation-direction**
- animation-direction: reverse
    - Vai fazer o oposto do código
- alternate
    - Faz uma vez em uma direção e a outra ao contrário (alternado)
    - exemplo:
        - 1ª vez: 0-25-50-75-100%
        - 2ª vez: 100-75-0-25-0% 

- alternate-reverse
    - Faz uma vez em uma direção e a outra ao contrário (alternado e alternado)
    - exemplo:
        - 1ª vez: 100-75-0-25-0%
        - 2ª vez: 0-25-50-75-100% 

**animation-timing-function**
- É para alterar a forma como o elemento vai se deslocar em cada trecho
    - linear 
    - ease
    - ease-in
    - ease-out
    - ease-in-out

**animation-fill-mode**
- forwards
    - Deixa o elemento como na última alteração realizada dentro do animation
    - Exemplo: 
        - Bolinha começa preta, depois de 2s de delay vai para o outro canto da tela ficando branca. Quando chega ao outro canto, fica lá parada e branca;

- backwards
    - O elemento começa como na primeira alteração realizada dentro do animation e o final são as propriedades orginais

- both
    - both significa ambos
    - durante o delay, mantem o que está interno ao from
    - a animação acontece durante o periodo em animation-duration e no final fica travado no que está na última chave;