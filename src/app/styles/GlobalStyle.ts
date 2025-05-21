import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  button {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  section {
    margin-bottom: 2rem;
  }
`;

export default GlobalStyle;
