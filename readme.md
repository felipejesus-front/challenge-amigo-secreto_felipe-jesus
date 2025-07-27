# 🎁 Projeto: **Amigo Secreto - Sorteador Interativo**

> Projeto desenvolvido como parte do meu curso de programação: uma aplicação simples, interativa e funcional para sortear nomes em um **Amigo Secreto**, usando apenas HTML, CSS e JavaScript puro.

## 📌 Descrição

Neste desafio, desenvolvi uma aplicação web que permite aos usuários inserir nomes em uma lista e, ao final, realizar um **sorteio aleatório** para definir quem é o "amigo secreto".

O objetivo foi criar uma solução **sem frameworks ou bibliotecas externas**, focando exclusivamente na lógica com JavaScript Vanilla e na construção de uma interface clara e funcional com HTML e CSS.

---

## ✨ Funcionalidades implementadas

- 📥 **Adicionar nomes à lista**  
  O usuário insere o nome de um amigo em um campo de texto e clica em **"Adicionar"** para incluí-lo na lista.

- ⚠️ **Validação de entrada**  
  O sistema impede a inserção de campos vazios, exibindo um alerta quando necessário.

- 📃 **Lista dinâmica de participantes**  
  Todos os nomes adicionados aparecem logo abaixo do campo de entrada, atualizando em tempo real.

- 🎲 **Sorteio aleatório**  
  Um botão **"Sortear Amigo"** escolhe aleatoriamente um dos nomes da lista e exibe o resultado na tela.

---

## 🌟 Funcionalidades bônus (extras que eu decidi implementar)

Além do que foi proposto no desafio, implementei algumas melhorias por conta própria para deixar a aplicação mais completa e prática de usar:

- 🗑️ **Remover nomes individualmente da lista**  
  Adicionei um botão de **excluir** ao lado de cada nome, permitindo que o usuário remova participantes da lista de forma fácil.

- 💾 **Lista com persistência no navegador (Local Storage)**  
  A lista de nomes continua salva mesmo se o usuário recarregar a página ou fechar o navegador. Isso foi feito utilizando o `localStorage` do navegador para manter os dados armazenados localmente.

- 🔄 **Botão de reset (recomeçar o jogo)**  
  Incluí um botão de **Reset**, que limpa toda a lista de participantes e o resultado do sorteio, permitindo iniciar um novo jogo com apenas um clique.

Essas melhorias foram uma iniciativa minha para treinar mais recursos do JavaScript e criar uma experiência mais completa para o usuário.

---

## 🛠️ Tecnologias utilizadas

- **HTML5** – Para estruturar a página de forma semântica
- **CSS3** – Para a estilização responsiva e clara da interface
- **JavaScript (puro)** – Para lidar com eventos, manipulação do DOM, armazenamento local e lógica do sorteio

> O projeto foi construído **sem o uso de bibliotecas externas**, o que me permitiu reforçar meu entendimento das bases da linguagem e da lógica de programação.

---

## 💡 O que eu aprendi com esse projeto

- A trabalhar com manipulação de DOM de forma dinâmica
- A capturar eventos de interação com o usuário (cliques, entradas de texto, etc.)
- A implementar validações simples em campos de formulário
- A desenvolver lógica de sorteio usando `Math.random()`
- A usar o `localStorage` para armazenar dados no navegador
- A estruturar uma aplicação completa do zero com HTML, CSS e JS

---

## 🧪 Demonstração

💬 _"Adicione os nomes, clique em sortear... e descubra quem será o amigo secreto!"_

> Acesse o repositório:  
> 👉 [github.com/felipejesus-front/challenge-amigo-secreto_felipe-jesus](https://github.com/felipejesus-front/challenge-amigo-secreto_felipe-jesus)

---

## 🚀 Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/felipejesus-front/challenge-amigo-secreto_felipe-jesus.git
   ```
