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