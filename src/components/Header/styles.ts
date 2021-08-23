import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem; // 16 pixels nas laterais 
  display: flex;
  align-items: center; // quero que a logo e o botão estejam  alinhados
  justify-content: space-between; // quero que aja um espaço entre a logo e o botão

  button { 
    font-size: 1rem; // 16 pixels de font
    color: #FFFFFF;  // 
    background: var(--blue-light); //
    border: 0;
    padding: 0 2rem; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; // deixa mais leve a transição do brightness

    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  }

`;
