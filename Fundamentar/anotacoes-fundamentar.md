https://app.skule.com.br/users/sign_in

## Definição de HTML
**Hypertext Markup Langyage** 

**Comentários**
- O comentário é feito da seguinte forma :arrow_right: "<!--  texto do comentário -- >" fecha a tag 

**Anatomia de tags**
- Sempre deve abrir (<>) e fechar uma tag (</>). Existem tags que não tem fechamento.
----
<h2> Atributos </h2>  
- Informações extras em um elemento;
- Configurações de um elemento;

- Exemplo: < img src="" alt="">
    -O src e o alt são atributos (nesse caso de configuração)
----
<h2> Aspas </h2>

- Sempre usar aspas duplas;

----

<h2> Atributos globais</h2>

- "class": É uma classe que pode ser acessada no JS e no CSS
- "contenteditable": Permite que você edite uma determinado texto dentro do navegador;
- "tabindex": quando for navegar pela página ele ordena por onde o tab vai começar e qual será a próxima div selecionada.

----

<h2> Aninhamento de tags</h2>

- É uma tag dentro da outra;

**posicionamento de elementos**
- Existem tags inline-level
    - Em linha
- Box-level
    - Quebram a linha

<h2>Caracteres reservados</h2>

- Existem no HTML e em outras linguagens diversos caracteres reservados
- Para poder escreve-los sem problema (e aparecer na página), é necessário colocar os códigos dos caracteres (acrescentar o ponto e vírgula ";"):
    - ">" :arrow_right: "&lt"
    - "<" :arrow_right: "&gt"
    - "&" :arrow_right: "&amp"

    
<h2>tags HTML</h2>

- &lt;cite&gt; **Citação** &lt;/cite&gt;
- &lt;blockquote&gt; **Citação** &lt;/blockquote&gt;
- &lt;abbr&gt; **Abreviação**&lt;/abbr&gt;
- &lt;address&gt; **Detalhes de contato de quem escreveu a página**&lt;/address&gt; <br><br>
- &lt;dl&gt;Description list &lt;/dl&gt; <br>
    &lt;dt&gt; Description term&lt;/dt&gt;
    - Forma de uso:
        - &lt;dl&gt;<br>
    &lt;dt&gt; Description term&lt;/dt&gt;
    <br>&lt;/dl&gt;

## Elementos genéricos: &lt;div&gt; e &lt;span&gt;
- &lt;div&gt;
    - Bloco com quebra de linha
- &lt;span&gt;
    - Bloco sem quebra de linha

<h1>Links</h1>
- Posso colocar qualquer coisa entre os &lt;a&gt; &lt;/a&gt;, até mesmo outras tags

----

<h1>Navegar entre os diretórios</h1>

- Mesmo diretório:
    - &lt;a href="../mesma-pagina&gt;<br>
- no root (raiz)
    - &lt;a href="./root&gt;<br>
- um diretório acima em uma pasta
    - &lt;a href="../pasta/outra-pasta&gt;

----

<h1>URL absoluto VS relativo</h1>

- Absolutos:
    - Inclui protocolo e nome de domínio
        - http://www.rocketseat.com.br
- Relativos
    - Relativo a pasta onde você está
    - Apontará para lugares diferentes
        - Exemplo :arrow_right: &lt;a href="./root"&gt;&lt;/a&gt;<br>

## Formulários
**Atributos**
- autocomplete
    - Completa com sugestões do navegador<br><br>
- autofocus
    - Coloca o cursor do mouse automaticamente naquele campo
    - Somente 1 por página<br><br>
- disable 
    - Uso: quase-todos -> não são todos os input que aceitam
    - Desabilitar o valor
    - Campo fica opaco<br><br>
- readonly 
    - Uso: quase-todos -> não são todos os input que aceitam
    - Boolean
    - Campo desabilitado, mas não está opaco<br><br>
- form
    - linca o imput com o formulário;
    - Quando o input for enviado, os dados do input são enviados tbm juntamente com os dados do formulário;
    - O form tem que ter um id (exemplo ```id="meu-form"```) e p input tem que ter o atributo (```form="meu-form"```) <br><br>
- name 
    - coloca-se o name para conseguir resgatar as informações lá no servidor;<br><br>
- required
    - Uso: quase-todos -> não são todos os input que aceitam
    - Boolean
    - Obrigatório
        - Para realizar o input é necessário preencher<br><br>
- placeholder
    - Uso: quase-todos -> não são todos os input que aceitam
        - Campos: password, search, tel, text, url;
    - Nome que fica dentro da caixa do input;<br><br>
----
**Input: Password**
- minlength/maxlength
    - Diz o mínimo e máximo de caracteres do campo;
- size
    - Altera o tamanho físico da box de input
- pattern
    - Expressão regular para validar o que está sendo digitado no campo
    - Altamente recomendado o uso de um padrão de segurança alta de senhas
    - Exemplo: quero que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres
        * pattern ="[8-9a-fa-f]{4,8}"
    - usar aliado ao title
- readonly / disabled
- required
- input mode
    - Altera o teclado do smartphone para o tipo correto
    - Exemplo: ```inputmode="numeric"```
- autocomplete
    - on: permite sugestão de: new-password ou current-password
    - off: desabilita o autocompletar
    - new-password: o navegador poderá sugerir uma nova senha<br><br>

------
**Input: Email**
- Espera que o usuário digite um email
- Valida se o input realmente é um email (mas não se é um email válido)

- placeholder
- readonly / disabled
- value
- required
- multiple
    - boolean
    - 1 ou mais emails separados por vírgulas
- minlength e maxlength
- pattern
- list
    - é uma sugestão de emails que estão em uma lista pré-configurada;
    - deve estar lincada a uma datalist<br><br>

------
**Input: URL**
- Espera que o usuário insira uma URL
- placeholder
- readonly / disabled
- value
- size
- pattern
- list
    - Lista de sugestões de URL
- spellchack
    - Habilita a verficação ortográfoca para este input<br><br>

------
**Input: file**
- Usuário insere um ou mais arquivos para o formulário
- value
    - Envia o primeiro arquivo que foi subido e uma lista dos outros arquivos (files)
- accept
    - Descreve os tipos de arquivos aceitos
        - .doc, .pdf, .js, .mp3, .mp4, .svg
        - ```image/*```, ```video/*```, ```audio/*```
            - Todos os tipos de imagens
        
- list
    - lista de multiplos arquivos que foram enviados
- multiple
    - permite que o usuário envie mais do que 1 arquivo<br><br>

------
**Input: color**

- Interface para selecionar cor
- Color Picker

- value
- list<br><br>

------
**Input: checkbox**
- Caixinhas que podem ser marcadas ou desmarcadas
- Globais
- value
    - valor que aquele campo contem
    - Se não estiver presente, o padrão é "on"
- checked
    - Boolean
    - Para deixar o campo marcado como padrão
- multiple
    - usaremos o atributo "name" com o mesmo nome para os diversos campos<br><br>

------
**Input: hidden**
- Invisível ao usuário
- será enviado com o formulário
- Não tem como receber foco
- Leitores de tela não percebem esse campo
- Pode ser usado, por exemplo, para colocar a data e a hora que o usuário submit o formulário<br><br>

------
**Input: radio**
- Seleção única
- checked
- value
- Precisa ter o mesmo "name" e o "value" deve ser diferente<br><br>

------
**Input: textarea**
- Textos de mais de uma linha
- id
- name
- rows e cols
    - Define o tamanho da box
- maxlength e minlength
    - tamanho mínimo e máximo do texto
- wrap
    - Quebra de linha habilitada ou não
    - ```wrap="soft/hard/off"```
- autocomplete, autofocus, disabled, placeholder, readonly, form, required<br><br>

------
**Input: select**
- Controle que fornece um menu de opções
    - Precisa estar vinculada a um ```<option>```
- multiple
    - Apresenta multiplas opções
    - Pode selecionar mais de 1 opção
- size
    - Quando multiple ativado, seleciona a quantidade de  opções visiveis sem scrolar<br><br>

------
**Input: optgroup**
- grupo de opções 
- modifica o estilo para cada grupo<br><br>

------
**Input: search**
- list/datalist
- pattern
- aria-label
    - É um label que fica escondido para acessibilidade
- placeholder<br><br>

------
**Input: number**
- Recebe apenas numeros
- min/max
- step
    - O valor do qual vai pular (100 em 100)<br><br>

------
**Input: range**
- comtrole para selecionar um valor numérico
- slider ou dial control

## JavaScript Core
- Linguagem de programação que roda no navegador do usuário
- Roda também no computador
- Fracamente tipada, ou seja, não preciso dizer o typeof da variável ao declara-la.

**Sintaxe**
- Escrever textos de uma forma correta
- Toda linguagem tem

**Tipos de dados**
- Gramática
    - Elementos da linguagem
- Vocabulário
    - Conjunto de termos e expressões
    - Agrupamento de palavras

**Object**
- Dado estrutural
- Todo objeto possui propriedades / atributos
- Funcionalidades / métodos
- Forma de escrita
    - ```{ propriedade: "valor"}```
        - Abro chaves
        - Coloco a propriedade
        - Coloco o valor da propriedade
        - Fecho chaves
    - Exemplo:
        - ```console.log({name: "Thomas", idade: 36, andar: function()=})```

**Scope**
- Determina escopo de uma variável
- O escopo, por sua vez, determina a visibilidade de alguma variável no JS
- **Block Statement**
    - É um bloco definido por {} o qual vai ser executado

**Tipos de variáveis**
- Variável global: Acontece dentro de todos os block statement de uma aplicação
    - Caso uma variável esteja definida depois da função que necessita dela, o JS vai puxar (elevar=hosting) a variável para cima do bloco que necessita dela, mas sem o valor e apresentará o valor ```Undefined```
    - Hosting -> Elevação da variável para uma linha antes do que está sendo solicitada.

- Variável local: Acontece apenas dentro do block statement ao qual ela está inserida
- **Var**
    - Global e local
    - Pode ser alterado, por que é uma variável;
    - Exemplo:
        ![var](./JS/images/var%20x.png)

- **let**
    - Local
    - Pode ser alterado, por que é uma variável; veja o exemplo do que acontece ao tentar alterar o valor da constante Y
    ![let](./JS/images/let.png)
    - Só existe no escopo no qual a variável está declarada

- **let**
    - Local
-   **NÃO pode ser alterado**, por que é não uma variável; veja o exemplo do que acontece ao tentar alterar o valor da constante Y
    image.png
    - Só existe no escopo no qual a variável está declarada

**Array**
 - Adicionar um item no fim
    - ```array.push()```
 - Adicionar um item no início
    - ```array.unshift()```
 - Remover um item no fim
    - ```array.pop()```
 - Remover um item no começo
    - ```array.shift()```
 - Apagar alguns elementos do array
    - ```array.slice (pos.inicio, pos. final)```
 - Remover 1 ou mais itens de qualquer posição
    - ```array.splice(primeiro elemento a ser retirado, quantos elementos no total)```
 - Encontrar uma posição
    - ```array.indexof("submit")```

**Expressões**
- new
    - Expressão que serve para criar um objeto
    - ```let name = new String('Mayk')```





**Operador**
- Binary
    - Precisa de 2 elementos para realizar a operação ```(1+1)```, ```(1-1)```, ```(5/2)```...
- Unary
    - Precisa de apenas 1 elemento para realizar a operação ``´(Number ++)´´`, ```(-- Number)```...
- Ternary
    -   Precisa de 3 operadores. Único exemplo: (false ? "alo" : "nada")


## Node.js
- != Framework
- != Linguagem
- É um "Runtime Enviroment"
    - Mini sistema operacional
    - O Node.js troca informações com o SO (Sistema Operacional) e o SO troca informações com o Hardware;
- Assincrono
- Single-threaded
- Non-blocking

**Executando o node.js**
- No VS Code, abra o terminal e configure como Bash do git
- Para rodar um código faça:
    - ```node {nome do arquivo}```

**Diretório local onde está o arquivo que estamos executando**
- ```console.log(__dirname)```

**Caminho completo + nome do arquivo**
- ```console.log(__filename)```

**Require()**
- ```console.log(require)```
    - ERRO DE ARGUMENTO: Sempre precisamos passar um argumento para o required;
- ```console.log(require('path'))```
    - Um objeto
- Colocando o path em uma variável e rodando a partir da variável: <br>
```const path = require('path')```
```console.log(path.basename(__filename))```
    - Saída: Nome do arquivo que você está executando

**Criando um módulo personalizado no Node.js**
- Cria um link entre dois arquivos JS
- Como chamar 
    - Crie dois arquivos: ```require.js``` e ```exports.js```;
    - No arquivo ```require.js``` crie uma constante e crie a seguinte linha de código: <br>```const myModule = require('./exports.js')```
    - chame a função com ```myModule()```

##TypeScript
- Trás uma tipagem de dados;
- Mantem a consistencia da aplicação;
- No final das contas, será complilado para JS Vanilla.
**Motivos para usar o TypeScript**
	- Vai evitar erros de tipologia de variáveis;
**Declaração explicita**
- O dev indica explicitamente qual é o tipo da variável;
- exemplo:
	- ```function showTicket(user: string, ticket:number)```

**type: Any**
- Declara uma variável no qual pode ter qualquer tipo
	- ```function showTicket(user: any, ticket:any)```
- Evitar usar, pois perde-se a essência do tipescript

**Declarando um Array**
- Existem duas formas de declarar uma array com o typescript:
	- ```let numbers: number[];```
	- ```let users: Array<string>;```

**Mais de um tipo em uma variável**
- ```function printUserId(id: number | string)```
	- É utilizado o "|" como (ou)

**generic**
- Pode ser qualquer tipo de entrada de dados, mas a partir do ponto que foi definida uma vez o tipo do dado pela strig, só será aceito aquele tipo de dado;

**Declaração de tipos
- Você cria uma variável que receba todos os tipos aceitos e depois, ao invés de escrever os tipos aceitos, coloca apenas essa variável
- Exemplo:
	- ```IdType= string | number | undefined;```
	- ```let userId: IdType```
	- ```let adminId: IdType```
cc


## Estrutura de dados
- Devemos estudar para tomar melhor decisões, tomada de decisão e etc...
- Organizar dados (informações)