## Qual é o número?

Este site foi desenvolvido utilizando HTML5, CSS3 e Javascript

O site consome uma API. Este consumo está ocorrendo em *getNumber.js*
O consumo da API ocorre assim que o site é carregado para melhor perfomance. Dado o retorno da API em JSON, o campo onde fica o display de sete segmentos permanece o mesmo (zerado) ou informa o erro ocorrido.
Assim que a API retorna o JSON, ele é enviado para o corpo do HTML onde fica armazenado em um span com display none.
Esse span, posteriomente tem seu valor acessado pelas funções contidas em "verificaNumero.js"

Em ***verificaNumero.js***estão as funções:
1) *verificaNumero*:  
Executa as funções posteriores a esta e dá o retorno visual se o número está correto ou não.
A função utiliza *getElementById* e *querySelector* para captar os elementos HTML5 do arquivo index.html

2) *validaNumero*:
Esta função verifica se o número digitado pelo usuário está de acordo com o intervalo em que solicitou o número aleatório à API. Neste caso, o número deve ser maior que 0 e menor que 301. Esta função tem retorno de true e false, que será utilizado para dar o retorno visual ao usuário se ele inseriu o número nos moldes corretos ou não.

3) *limpaForm*:
Retorna o formulário a seu estado inicial, ou sej, após o botão "Enviar" ser clicado, o formulário (input) tem seu valor setado como null.

4) *disabled*: 
Desativa o campo de inserir palpite e o campo de submeter o palpite. É usada nos casos em que há erro na requisição da API ou quando o usuário ganha o jogo.

5) *setDisplays*:
A função recebe como parâmetro o valor do palpite, que é digitado pelo usuário e obtido utilizando o getElementById. Com esse valor, realiza a segmentação do mesmo em um vetor de strings. em seguida, é definida uma classe base. A classe base(string) é somada ao dígito do número do palpite(string), gerando uma nova classe(string) que retornará o núemro com a configuração de segmentos. Todas as possibilidades de número (0 a 9) estão definididas e formatadas em index.css. Por exemplo: Se a base for *display-container display-size-12 display-no-*, e o valor do dígito for 1, a classe aplicada ao display será *display-container display-size-12 display-no-1*. Esse display-no-1 possui a configuração em que os segmentos b e c ficam sem opacidade e assim, formam o número 1.
A função, utilizando o tamanho do vetor de strings, realiza uma comparação para retornar apenas a quantidade de displays necessárias para representar o número digitado pelo usuário.

Em **reset.css**, todas as formatações padrões do css/html estão sendo zeradas.

Em ***index.css*** está contido o código escrito em CSS3 baseado em classes e Id's. Foi utilizada para alinhamento a propriedade *flexbox*.

Em **index.html**:
Têm-se o HTML executado pelo navegador. 
No Head, estão algumas definições que serão utilizadas para aplicar formatação no documento (todos os 'link')

No body, estão os elementos que participarão da composição visual do site. Elementos do tipo block e elementos inline quando necessário.

No input de id="palpite", temos o local onde o usuário irá inserir o valor palpite. Nesse input, foi colocado um "escutador de teclas" para clicar o botão de submeter o formulário quando o usuário teclar enter.

No input do tipo submit e id="enviar, têm-se o botão que submete o formulário com o palpite do usuário sobre qual é o número. Foi colocado um escutador de eventos, que no momento que o botão é clicado, a função verificaNumero() é chamada e realiza todas as verificações necessárias acerca do palpite do usuário.

Abaixo, está localizado um span com display none onde o valor aleatório consumido pela api está como conteúdo.

Em seguida, há as importações dos scripts que serão utilizados.


