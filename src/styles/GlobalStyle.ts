import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%; 
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.bluewood};
    margin: 0px;
    padding: 0px;
  }
`;
export default GlobalStyle;
