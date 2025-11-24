# Projeto Chatbot de Atendimento Simulado - Frontend 

## Descrição 
Este projeto consiste em um sistema fullstack de chat simulado desenvolvido para demonstrar habilidades em desenvolvimento web com Django e React. A aplicação frontend oferece uma interface intuitiva para interação com um chatbot simulado, permitindo aos usuários alternar entre dois perfis diferentes ("Usuário A" e "Usuário B") e visualizar históricos de conversas específicos para cada perfil.

O sistema simula um ambiente de atendimento ao cliente onde diferentes usuários recebem respostas personalizadas do chatbot, com todas as interações sendo armazenadas e recuperadas através de uma API REST. A aplicação foi desenvolvida com foco em usabilidade, responsividade e integração eficiente com o backend Django. 

* [Backend Django](https://github.com/Davizera231/Desafio-Chatbot-de-Atendimento-Simulado---Backend) 

# Pré-requisitos 
* React 19.2.0
* Bootstrap 5.3.8
* React-dom 19.2.0
* React-router-dom 7.9.6
* Axios 1.13.2
* React script 5.0.1
* Node.js 14.17.3+ 

# Instalação 

### 1. Clone o repositório: 
```
git clone https://link-do-repo-frontend.git

``` 

### 2. Navegue até o diretório do projeto: 
```
cd desafio-chatbot-de-atendimento-simulado-frontend

``` 

### 3. Instale as dependências: 
### Com npm: 
```
npm install

```

### 4. Inicie o projeto: 
### Com npm: 
```
npm start

```

# Funcionalidade Principais 

## Login Simulado 
* Seleção entre "Usuário A" e "Usuário B" através de interface intuitiva 
* Estado do usuário mantido durante a sessão
* Navegação dinâmica baseada no usuário selecionado 

# Sisttema de chat
* Interface de chat em tempo real 
* Envio de mensagens para a API Django
* Respostas automáticas personalizadas por usuário
* Design responsivo e moderno com Boostrap 
* Indicadores de digitação e status de envio 

# Histórico de Conversas 
* Visualização do histórico filtrado por usuário 
* Atualização automática ao alternar entre usuários 
* Exibição de data e hora das interações 
* Layout organizado com diferenciação visual entre perguntas e respostas 

# Estrutura do Projeto 

```

src
    │   App.js
    │   App.test.js
    │   index.css
    │   index.js
    │   logo.svg
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───components
    │       Button.js
    │       Chat.js
    │       ChatHistory.js
    │       Input.js
    │       Navbar.js
    │       UserSelector.js
    │
    ├───services
    │       api.js
    │
    └───styles
            App.css
            Chat.css

```

# Fluxo de Dados
* 1. Seleção do usuário no componente "UserSelector"
* 2. Navegação entre Chat e Histórico 
* 3. Comunicação com API Django via serviços Axios
* 4. Renderização condicional baseada no estado 

# Decisão de Arquitetura

## Decisão: Usar useState para gerenciamento de estado em vez de redux/context

## Justificativa: 
* Simplicidade: Estado minimo necessário para funcionalidades
* Performance: Evita complexidade desnecessária
* Manutenção: Fácil de entender e modificar

## Decisão: Separar componentes por funcionalidade especifica.

## Justificativa:
* Single Responsibility: Cada componente tem uma única responsabilidade
* Reusabilidade: Fácil reutilizar componentes em outros projetos
* Testabilidade: Componentes isolados são mais fáceis de testar 

## Decisão: Criar camada de serviço dedicada para comunicação com backend. 

## Justificativa: 
* Separação de Lógica: Lógica de API separada da UI
* Manutenção: Mudanças na API afetam apenas um arquivo
* Reusabilidade: Mesmos serviços podem ser usados em diferentes componentes
* Testabilidade: Fácil mockar chamadas de API em testes


