import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969CB3;
    --shape: #FFFFFF;
  }


 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   @media (max-width: 1080px) { // quando o usuario estiver com uma tela até 1080 pixels de largura, vou diminuir a fonte
     font-size: 93.75%; // 15px
   }
   @media (max-width: 720px) { // quando o usuario estiver com uma tela de 720 pixels de largura, vou diminuir a fonte
     font-size: 87.5%; // 14px
   }
 }

 body {
   background: var(--background);
   -webkit-font-smoothing: antialiased; // no chrome, que as fontes ficam mais detalhadas
 }

 body, input, textarea, button {
   font-family: 'Poppins', sans-serif;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 600;

 }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
