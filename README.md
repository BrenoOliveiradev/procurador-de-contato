# 🔍 Buscador de Contatos com JavaScript

Este projeto foi desenvolvido com o objetivo de **aprender e praticar o uso da estrutura `for` no JavaScript**, além de aplicar outros conceitos fundamentais da linguagem.

---

## 🚀 Funcionalidades

- Busca de contatos por nome em um array
- Uso de `for` e `i++` para percorrer o array
- Parada do loop com `break` quando o contato é encontrado
- Uso de `toLowerCase()` para evitar conflitos com letras maiúsculas e minúsculas
- Mensagens dinâmicas de resultado usando `if`, `else if` e `else`
- Alteração do conteúdo e cor do texto com `innerHTML` e `style.color`

---

## 💻 Tecnologias Usadas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

---

## 📚 O que foi aprendido

- Estrutura de repetição `for`
- Controle de fluxo com `if`, `else if` e `else`
- Função `break` para encerrar loops
- Comparações de strings com `toLowerCase()`
- Manipulação do DOM com `document.querySelector`, `getElementById`, `innerHTML` e `style`

---
## 📷 Imagem do Projeto

<img src="https://github.com/BrenoOliveiradev/procurador-de-contato/blob/master/img/Procurador%20de%20Contato-Desktop.png?raw=true"/>

---

## 📷 Exemplo de Uso

O usuário digita o nome de um contato e clica no botão. O programa verifica se o nome existe na lista e:

- ✅ Exibe nome e telefone, com mensagem azul
- ❌ Exibe erro em vermelho, caso não encontre
- ⚠️ Exibe aviso em vermelho, se o campo estiver vazio

---

## 📝 Como usar

1. click aqui <a href="https://brenooliveiradev.github.io/procurador-de-contato" target="_blank">Procurador de Contatos</a>
2. Digite o nome de um contato fictício da lista
3. Clique no botão para fazer a busca

---

## 📦 Contatos fictícios usados

```js
const contacts = [
  { name: 'Breno', number: '(85) 99120-4164' },
  { name: 'Benedita', number: '(85) 99999-9999' },
  { name: 'Hianna', number: '(85) 99125-3648' },
  { name: 'Dudeco', number: '(85) 77777-7777' },
  { name: 'Bakita', number: '(85) 98755-3524' }
];
