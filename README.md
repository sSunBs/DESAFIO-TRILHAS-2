# 🎲 Desafio Trilhas 2 - Etapa Desafio 3

## Documentos Enviados

[x] Documento de requisitos (PDF, DOCX ou Google Docs)

[x] Arquivos HTML e CSS e JS

[x] **PDF Resumo do Projeto** para Portfólio (novo item obrigatório)

[x] Vídeo de Apresentação do Projeto

[x] Ilustração do Processo de Criação

### Link do Figma 

https://www.figma.com/design/pnl8r2pBYFwUb772SGD5hO/Forms-Trilhas?node-id=0-1&t=4ehKd8JR3rqnMmHa-1

## Dupla

1. Tiago Cardoso Ferreira
2. Laina Barros

# Sistema de Inscrição e Seleção para Formação em Tecnologia

Este projeto tem como objetivo facilitar e automatizar o processo de inscrição e seleção de jovens e adultos interessados em formação na área de tecnologia. A solução foi desenvolvida utilizando HTML, CSS e JavaScript puro, com foco em usabilidade, validação e organização do fluxo de inscrição.

---

## 🚀 Funcionalidades

- **Página inicial com botão "Inscreva-se"**: Direciona o usuário ao formulário de inscrição.

- **Formulário de Inscrição Completo**:
  - Nome, e-mail, CPF, telefone, endereço
  - Área de interesse, formação acadêmica, experiência profissional
  - Disponibilidade de horário, carta de motivação
  - Upload de documentos (simulado)
  - Campos para criação de ID do usuário e senha

- **Validação com JavaScript**:
  - Verificação de e-mail válido
  - Todos os campos obrigatórios
  - Mensagens de erro por campo

- **Armazenamento Temporário (LocalStorage)**:
  - Salvar dados preenchidos
  - Recuperar informações automaticamente ao retornar

- **Tela de Login**:
  - Login com ID de usuário e senha criados durante a inscrição
  - Validação dos dados via LocalStorage

- **Mensagem de Confirmação**:
  - Alerta ou mensagem estilizada após o envio bem-sucedido

- **Responsividade**:
  - Layout adaptado para celulares, tablets e desktops

---

## 💾 Notas

Algumas coisas que estavam sendo pedidas no notion, nós não colocamos ou modificamos, abaixo o motivo de não ter essas coisas:

1. Exibição de mensagem de erro em todos os campos -> Em alguns campos não vimos necessidade de colocar um aviso "agressivo" (neste caso um aviso usando um alert ou algo do tipo, decidimos optar por essa abordagem porque dentro dos campos já diz diretamente o que se deve colocar.

2. Campos de id do usuário e senha -> não adicionamos porque para o id de usuário, no lugar desse campo decidimos usar o um campo que ja existia e usar ele de login, nesse caso o própio NOME que o usuário coloca no formulário.

3. Adicionar um botão de salvar as infos -> nâo colocamos porque ja tem o armazenamento temporário das informações, que testamos e salva mesmo se vc fechar a janela e abrir de novo, por isso não colocamos


---

## 🧑‍💻 Tecnologias Utilizadas

- **HTML5**  
- **CSS3 (Flexbox e Media Queries)**  
- **JavaScript (DOM, validações e LocalStorage)**  
