# Anotações importantes do projeto

- Tudo o que eu quiser que seja importado globalmente para todas as páginas eu importo diretamente no arquivo app.tsx, devo importar ele diretamente, sem nome, ex: import "../styles/globals.scss";

- No css para utilizar uma cor que eu possa chamar em qualquer parte do projeto eu uso --nomedacor: codigodacor, ex: --white: #fff

- Para que o & funcione como filho na estrutura do css ele deve estar dentro do elemento pai, ex:
  .button{
  &:hover{
  }
  }
  Caso esteje fora o react vai reclamar

  - Instalar a biblioteca axios (yarn add axios nookies jwt-decode)

- instalar a biblioteca toastify (yarn add react toastifycls)
- instalar a biblioteca react-modal (yarn add react-modal / yarn add @types/react-modal -D)